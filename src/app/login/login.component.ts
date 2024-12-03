import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit
{

  subject : string="";

  message:any="";

  user:User=new User('','',0,'');
  
  constructor(private userservice:UserService,private router:Router)
  {

  }

  ngOnInit(): void 
  {
    this.message=sessionStorage.getItem("message");
  }

  showRegister()
  {
    this.router.navigate(['register']);
  }
  validate()
  {
      this.userservice.validate(this.user).subscribe(answer=>{

        if(answer)
        {
          this.router.navigate(['question']);

          sessionStorage.setItem("username",this.user.username);

          sessionStorage.setItem("subject",this.subject);

        }

        else
        {
          this.router.navigate(['login']);

          this.message="invalid credentials";

        }


      });

  }
}
