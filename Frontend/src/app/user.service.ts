import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { contactUser } from './contact/contactUser';
import { BookUser } from './book-tickets/bookUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private basePath = 'http://localhost:8086/user';

  constructor(private http: HttpClient) { }


  // getAllStudents(): Observable<Student[]> {
  //   return this.http.get<User[]>(`${this.basePath}/all`);
  // }

  // deleteOneStudent(id: number): Observable<any> {
  //   return this.http.delete(`${this.basePath}/remove/${id}`, {responseType: 'text'});
  // }

  saveUser(user: User): Observable<any> {
    return this.http.post(`${this.basePath}/Registration`, user, {responseType: 'text'});
  }

  // loginUser(user: User): Observable<any> {
  //   return this.http.post(`${this.basePath}/Login`, user, {responseType: 'text'});
  // }

  fetchUserByEmailAndPassword(user: User): Observable<any> {
    return this.http.post(`${this.basePath}/Login`, user);
  }

  saveContactInfo(user: contactUser): Observable<any> {
    return this.http.post(`${this.basePath}/Contact`, user, {responseType: 'text'});
  }

  saveBooking(user: BookUser): Observable<any> {
    return this.http.post(`${this.basePath}/Book-ticket`, user, {responseType: 'text'});
  }

  // getOneStudent(id: number): Observable<Student> {
  //   return this.http.get<Student>(`${this.basePath}/one/${id}`);
  // }

  // updateStudent(id: number, student: Student): Observable<any> {
  //   return this.http.put(`${this.basePath}/modify/${id}`, student, {responseType : 'text'});
  // }

}
