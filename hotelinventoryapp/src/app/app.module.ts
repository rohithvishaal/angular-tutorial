import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { JsontestComponent } from './jsontest/jsontest.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    JsontestComponent,
    RoomsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
