import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register= new FormGroup({
    firstName: new FormControl(('deva'),[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('raj',[Validators.required]),
    mobile: new FormControl((876543456),[Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('dvrj@gmail.com',[Validators.required,Validators.email]),
    password:new FormControl('dvrj',[Validators.required,Validators.minLength(4)])
  });
  constructor(private regservice:RegistrationService) {
    console.log("created the register model");
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("invoked onSubmit");
    console.log(this.register.value);
    this.regservice.onReg(this.register);
  }
}
