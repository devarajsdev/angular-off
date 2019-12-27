// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {Component} from '@angular/core';

export interface PeriodicElement {
 lastname: string;
  Firstname: number;
  UserId: number;
  Password: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Firstname: 1,lastname: 'lastlastname', UserId: 1.0079, Password: 'H'},
  {Firstname: 2,lastname: 'Helium', UserId: 4.0026, Password: 'He'},
  {Firstname: 3,lastname: 'Lithium', UserId: 6.941, Password: 'Li'},
  {Firstname: 4,lastname: 'Beryllium', UserId: 9.0122, Password: 'Be'},
  {Firstname: 5,lastname: 'Boron', UserId: 10.811, Password: 'B'},
  {Firstname: 6,lastname: 'Carbon', UserId: 12.0107, Password: 'C'},
  {Firstname: 7,lastname: 'Nitrogen', UserId: 14.0067, Password: 'N'},
  {Firstname: 8,lastname: 'Oxygen', UserId: 15.9994, Password: 'O'},
  {Firstname: 9,lastname: 'Fluorine', UserId: 18.9984, Password: 'F'},
  {Firstname: 10,lastname: 'Neon', UserId: 20.1797, Password: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['search.component.css'],
  templateUrl: 'search.component.html',
})
export class SearchComponent {
  displayedColumns: string[] = ['Firstname', 'lastname', 'UserId', 'Password'];
  dataSource = ELEMENT_DATA;
}
