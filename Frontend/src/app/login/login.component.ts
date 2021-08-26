import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  user=new User();
  res:any;

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }



  onSubmit()
  {
    if(this.user.email=="sm@gmail.com" && this.user.password=="sandip")
    {
      // this.service.fetchUserByEmailAndPassword();
      window.location.href="/Home";
    }
    else{

      this.service.fetchUserByEmailAndPassword(this.user).subscribe(data=>{
        this.res=data;
        console.log("response received");
        console.log(this.res);
        this.service.fetchUserByEmailAndPassword(this.res);
        window.location.href="/Home";
  
      },
      error=>{
        console.log("Exception occured");
        alert("Invalid username and password");
        
      })

    }
  }


  }



  
