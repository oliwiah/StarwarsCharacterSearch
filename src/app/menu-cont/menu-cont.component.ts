import { Component, OnInit} from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../StarwarsCharacter.service';

@Component({
  selector: 'app-menu-cont',
  templateUrl: './menu-cont.component.html',
  styleUrls: ['./menu-cont.component.css']
})
export class MenuContComponent implements OnInit {
  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacterMethod();
  }

}
