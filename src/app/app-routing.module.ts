import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './root/home/home.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: MainComponent, 
    children: [
      { path: 'projects', loadChildren: './pages/projects/projects.module#ProjectsModule' },
      { path: 'staff', loadChildren: './pages/staff/staff.module#StaffModule' }
    ] 
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
