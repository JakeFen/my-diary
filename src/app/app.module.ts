import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiaryComponent } from './diary/diary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiaryFormComponent } from './diary-form/diary-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    DiaryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
