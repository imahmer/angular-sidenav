import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImaSidenavComponent } from './ima-sidenav/ima-sidenav.component';
import { ImaSidenavChildComponent } from './ima-sidenav/ima-sidenav-child/ima-sidenav-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ImaSidenavComponent,
    ImaSidenavChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
