import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuContComponent } from './menu-cont/menu-cont.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuElemComponent } from './menu-cont/menu-elem/menu-elem.component';
import { CharacterService } from './StarwarsCharacter.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuContComponent,
    ProfileComponent,
    MenuElemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
