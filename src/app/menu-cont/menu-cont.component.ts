import { Component, OnInit, OnDestroy} from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../StarwarsCharacter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-cont',
  templateUrl: './menu-cont.component.html',
  styleUrls: ['./menu-cont.component.css']
})
export class MenuContComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private characterService: CharacterService) {}

  getNextPage(): void {
    this.characters$ = this.characterService.getNextCharacters();
  }

  getPrevPage(): void {
    this.characters$ = this.characterService.getPrevCharacters();
  }

  ngOnInit(): void {
    this.getNextPage();
  }

}
