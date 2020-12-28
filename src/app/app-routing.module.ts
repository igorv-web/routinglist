import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';

import { CenzorComponent } from './works/cenzor/cenzor.component';
import { TaskmanagerComponent } from './works/taskmanager/taskmanager.component';
import { PhonemanagerComponent } from './works/phonemanager/phonemanager.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component:HomeComponent},
  {path:'works', component:WorksComponent, children: [
    {path:'cenzor', component:CenzorComponent},
    {path:'taskmanager', component:TaskmanagerComponent},
    {path:'phonemanger', component:PhonemanagerComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
