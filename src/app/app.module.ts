import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutmeCardComponent } from './aboutme-card/aboutme-card.component';
import { TodolistProjectCardComponent } from './todolist-project-card/todolist-project-card.component';
import { WorkexperienceCardComponent } from './workexperience-card/workexperience-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeCardComponent,
    TodolistProjectCardComponent,
    WorkexperienceCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
