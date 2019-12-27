import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';

 import { AddappComponent } from './home/addapp/addapp.component';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { AddAppModule } from './home/addapp/addapp.module';
import { SearchModule } from './search/search.module';

// import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [  AppComponent  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,RoutingModule
    ,RegistrationModule,LoginModule,HomeModule,AddAppModule,SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
