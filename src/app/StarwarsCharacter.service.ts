import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character.model';
import { Observable, zip } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { chain, curry } from 'lodash';

@Injectable()
export class CharacterService {
  characterSelected = new EventEmitter<Character>();
  url = 'https://swapi.co/api/people/?page=1';
  nextUrl: string;
  prevUrl: string;

  constructor(private http: HttpClient) {}

  getNextCharacters() {
    const url = this.nextUrl || this.url;
    return this.getCharacters(url);
  }

  getPrevCharacters() {
    const url = this.prevUrl || this.url;
    return this.getCharacters(url);
  }

  getSearchedCharacters(searchPhrase: string) {
    const url = `${this.url}&name=${searchPhrase}`;
    return this.getCharacters(url);
  }

  getCharacters(url: string): Observable<Character[]> {
    return this.http.get<any>(url)
      .pipe(
        tap(res => this.nextUrl = res.next),
        map(res => res.results),
        mergeMap(chars =>
          zip(...chain(chars)
            .map(char => [char.species, char.starships])
            .flattenDeep()
            .uniq()
            .map(species => this.http.get(species))
            .value()
          ), (chars, responses) =>
            chars.map(char => {
              const findFunc = curry((targetUrl, obj) => obj['url'] === targetUrl);
              const species = char.species.map(
                speciesUrl => responses.find(findFunc(speciesUrl))
              );
              const starships = char.starships.map(
                starshipUrl => responses.find(findFunc(starshipUrl))
              );
              return Object.assign(char, { species, starships });
            })));
  }
}
