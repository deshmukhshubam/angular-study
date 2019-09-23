import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  userFilter: any = {};
  employees: Employee[];

  order: string = 'Id';
  reverse: boolean = false;
  constructor() {}


  
  settings = {
    columns: {
      Id: {
        title: 'ID'
      },
      Name: {
        title: 'Full Name'
      },
      Age: {
        title: 'Age'
      },
      Country: {
        title: 'Country'
      }
    }
  };


  ngOnInit() {


    this.employees =[
      {"Id": 101, "Name": "Shubham Deshmukh", "Age": 26, "Country": "India"},
      {"Id": 102, "Name": "Komal Deshmukh", "Age": 26, "Country": "France"},
      {"Id": 103, "Name": "Kaustubh Virulkar", "Age": 22, "Country": "UK"},
      {"Id": 104, "Name": "Prashant Zadgaonkar", "Age": 38, "Country": "US"},
      {"Id": 105, "Name": "Vipul Virulkar", "Age": 26, "Country": "Sweden"}
    ];
   

  }



  setby = function(order) {
    
    this.reverse = (this.order === order) ? !this.reverse : false;
    this.order = order;
  };

  search = function(id){
    
    const data = this.employees.filter(d => d.Id== id);
    console.log(data[0]);
   
  }

}
