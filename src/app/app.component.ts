import { Component, OnInit } from '@angular/core';
import { CharacterService } from './StarwarsCharacter.service';
import { Character } from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharacterService]
})
export class AppComponent implements OnInit {
  title = 'app';
  selecectedCharacter: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.characterSelected
      .subscribe(
        (character: Character) => {
          this.selecectedCharacter = character;
        }
      );
  }

}
