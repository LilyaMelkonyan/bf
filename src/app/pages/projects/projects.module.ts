
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects-view/projects.component';
import { HoverContainerComponent } from './hover-projects/hover-projects.component';



const routes: Routes = [
  { path: '', component: ProjectsComponent}
];

@NgModule({
  declarations: [
    ProjectsComponent,
    HoverContainerComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule
  ],
  exports: [RouterModule],
  providers: []
})
export class ProjectsModule { }
