import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetTimesComponent } from './set-times/set-times.component';
import { ViewTranscriptComponent } from './view-transcript/view-transcript.component';

@NgModule({
  declarations: [
    AppComponent,
    SetTimesComponent,
    ViewTranscriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
