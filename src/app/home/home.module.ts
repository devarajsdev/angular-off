import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,RouterModule
  ],
  exports:[HomeComponent],
  providers:[]
})
export class HomeModule { }
