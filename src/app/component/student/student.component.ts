import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';

import { Data } from '../../model/Data';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  datas : Data[];

  constructor(private studentService : StudentService ) {  }

  ngOnInit(): void {
  //  this.studentService.getStudent().subscribe(datas =>{this.datas = datas});
   this.studentService.getStudent().subscribe(datas =>{this.datas = datas});
  
  }

  addStudent(data : Data)
  {
    console.log('Add Student');
    this.studentService.addStudent(data).subscribe(data => {
      this.datas.push(data);
    });

   
  }
 

  

}
