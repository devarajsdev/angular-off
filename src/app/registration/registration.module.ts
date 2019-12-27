import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationService } from './registration.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule
  ],
  providers:[RegistrationService],
  exports:[RegistrationComponent]
})
export class RegistrationModule { }
