import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../character.model';
import { CharacterService } from '../../StarwarsCharacter.service';

@Component({
  selector: 'app-menu-elem',
  templateUrl: './menu-elem.component.html',
  styleUrls: ['./menu-elem.component.css']
})
export class MenuElemComponent implements OnInit {
  @Input() character: Character;
  @Input() isActive = false;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {}

  onSelected() {
    this.characterService.characterSelected.emit(this.character);
    console.log('the character has been chosen');
    this.isActive = !this.isActive;
  }
}
