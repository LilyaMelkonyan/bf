
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StaffComponent } from './staff.component';

const routes: Routes = [
  { path: '', component: StaffComponent}
];

@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule
  ],
  exports: [RouterModule],
  providers: []
})
export class StaffModule { }
