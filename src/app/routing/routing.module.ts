import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AddappComponent } from '../home/addapp/addapp.component';
import { SearchComponent } from '../search/search.component';

const roots:Routes=[
  {path:"registration" ,component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,
  children:[{
    path:"add",component:AddappComponent
  }]
 },
 {path:"search",component:SearchComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(roots)],
  exports:[RouterModule]
})
export class RoutingModule { }
