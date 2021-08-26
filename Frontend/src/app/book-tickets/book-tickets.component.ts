import { Component, OnInit } from '@angular/core';
import { BookUser } from './bookUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})

export class BookTicketsComponent {

  bookUser!: BookUser;
  // message to ui
  
  message!: string;

  // inject service class
  constructor(private service: UserService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.bookUser = new BookUser();
  }

  // tslint:disable-next-line: typedef
  saveBooking() {
    this.service.saveBooking(this.bookUser)
    .subscribe(data => {
      this.message = data;
      this.bookUser = new BookUser(); // clear form
      window.location.href="/Success";
    }, error => {
      console.log(error);
    });
  }

}
