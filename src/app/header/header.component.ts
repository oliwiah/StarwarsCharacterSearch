import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/character.model';
import { CharacterService } from 'src/app/StarwarsCharacter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() character: Character;

  constructor(private characterService: CharacterService) {}

  getSearched(name): void {
    this.characterService.getSearchedCharacters(name);
  }

  ngOnInit() {
  }

}
