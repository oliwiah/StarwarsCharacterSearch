import { Component, OnInit } from '@angular/core';

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
