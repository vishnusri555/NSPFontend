import { Component } from '@angular/core';
import { student } from './model/Student';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NationalScholarshipPortal';
  student:any;
  constructor(private crudService:CrudService) {} 
  button() {
    this.crudService.getStudents().subscribe((data)=>
    {
      this.student = data;
      console.log(data);
    })
  }
}
