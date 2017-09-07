import { Component, ViewEncapsulation, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
   /* Create variable */
    title:string;
    firstName: string;
    lastName: string;
    

  ngOnInit() {
    /* Assign values to the variable after OnInit */
    this.title = 'Property Binding';
    this.firstName = 'Santhosh Kumar';
    this.lastName = 'Marappe'
  }
 /* display values  with title on click of button */
onBtnClick() {
  alert(this.title + this.firstName + this.lastName); 
  }
}