import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  

  user!: User;
  // message to ui
  
  message!: string;

  // inject service class
  constructor(private service: UserService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.user = new User();
  }

  // tslint:disable-next-line: typedef
  saveUser() {
    this.service.saveUser(this.user)
    .subscribe(data => {
      this.message = data;
      this.user = new User(); // clear form
      window.location.href="/Login";
    }, error => {
      console.log(error);
    });
  }

}
