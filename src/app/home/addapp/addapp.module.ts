import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddappComponent } from './addapp.component';
import { AddappService } from './addapp.service';



@NgModule({
  declarations: [AddappComponent],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule
  ],
  exports:[AddappComponent],
  providers:[AddappService]
})
export class AddAppModule { }
