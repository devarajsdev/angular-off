import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppStore';
  firstName;
  constructor(private _router:Router){

  }

  ngOnInit(){
    this.firstName=sessionStorage.getItem('firstName');
  }

  onLogout(){
    console.log("invoked onLogout ");
    sessionStorage.removeItem('firstName');
    this._router.navigate(['/registration']);
  }
  onSearch(){
    console.log('invoked on search ');
    this._router.navigate(['/search']);
  }
}
