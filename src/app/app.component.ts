import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from './StarwarsCharacter.service';
import { Character } from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CharacterService]
})
export class AppComponent implements OnInit {
  title = 'app';
  @Input() selectedCharacter: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.characterSelected
      .subscribe(
        (character: Character) => {
          this.selectedCharacter = character;
        }
      );
  }

}
