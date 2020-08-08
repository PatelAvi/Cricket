import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Data } from '../../model/Data'
import { from } from 'rxjs';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
  @Output() addStudent : EventEmitter<any> = new EventEmitter();
  studentname : string;
  enrollment : number ;
  subject1 : number;
  subject2 : number;
  subject3 : number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const datastudent={
      studentname : this.studentname,
      enrollment : this.enrollment,
      subject1 : this.subject1,
      subject2 : this.subject2,
      subject3 : this.subject3
    }
    this.addStudent.emit(datastudent);
    
  }

}
