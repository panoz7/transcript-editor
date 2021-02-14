import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTranscriptComponent } from './view-transcript/view-transcript.component';
import { SetTimesComponent } from './set-times/set-times.component';


const routes: Routes = [
  { path: 'view', component: ViewTranscriptComponent },
  { path: 'edit', component: SetTimesComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
