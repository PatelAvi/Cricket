import { Injectable } from '@angular/core';
import { Data } from '../model/Data';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  StudentUrl : string = 'https://jsonplaceholder.typicode.com/todos';
  StudentLimit = '?_limit=5';
  AddStudent : any;

  constructor(private http: HttpClient) { }
  
  getStudent() : Observable<Data[]>
  {
    return this.http.get<Data[]>(`${this.StudentUrl}${this.StudentLimit}`);
  }

  addStudent(data : Data) : Observable <Data> {
    return this.http.post<Data>(this.StudentUrl,Data,httpOptions);
  } 
}
