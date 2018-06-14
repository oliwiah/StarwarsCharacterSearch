import { EventEmitter, Injectable } from '@angular/core';
import { Character } from './character.model';

@Injectable()
export class CharacterService {
  characterSelected = new EventEmitter<Character>();

  private characters: Character[] = [
    new Character('Luke', '123', 234, 45, 'blue', 'white', 'male', 4),
    new Character('Anne', '46', 757, 12, 'blue', 'white', 'female', 1),
    new Character('Blah', '3', 857, 12, 'blue', 'white', 'male', 0)
  ];

  getCharacterMethod() {
      return this.characters.slice();
  }
}
