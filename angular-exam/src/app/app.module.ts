import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { AddComponent } from './components/add/add.component';
import { TooLongPipe } from './pipes/too-long.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BackgroundColorDirective,
    AddComponent,
    TooLongPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
