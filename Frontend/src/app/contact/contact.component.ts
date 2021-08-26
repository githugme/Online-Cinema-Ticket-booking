import { Component, OnInit } from '@angular/core';
import { contactUser } from './contactUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactUser!: contactUser;
  // message to ui
  
  message!: string;

  
  constructor(private service: UserService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.contactUser = new contactUser();
  }

  saveContactInfo() {
    this.service.saveContactInfo(this.contactUser)
    .subscribe(data => {
      this.message = data;
      this.contactUser = new contactUser(); // clear form
      window.location.href="/Thankyou";
    }, error => {
      console.log(error);
    });
  }


}
