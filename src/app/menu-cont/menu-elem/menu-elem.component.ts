import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../character.model';
import { CharacterService } from '../../StarwarsCharacter.service';

@Component({
  selector: 'app-menu-elem',
  templateUrl: './menu-elem.component.html'
})
export class MenuElemComponent implements OnInit {
  @Input() character: Character;
  @Input() isActive = false;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {}

  onSelected() {
    this.characterService.characterSelected.emit(this.character);
    this.isActive = !this.isActive;

    // this.characterService.getDetails()
    //   .subscribe(data => {
    //     console.log(data);
    //   });
  }
}
