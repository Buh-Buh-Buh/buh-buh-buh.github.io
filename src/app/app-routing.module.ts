import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectProposalComponent } from './project-proposal/project-proposal.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'proposal', component: ProjectProposalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
