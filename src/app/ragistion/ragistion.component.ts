import { Component } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './Ragistion.component.html',
  styleUrl: './Ragistion.component.css'
})
export class RegisterComponent {
  
  user:User=new User('','',0,'');

  constructor(private userservice:UserService,private router:Router)
  {

  }
    saveToDB()
    {
        this.userservice.saveToDB(this.user).subscribe();

        this.router.navigate(['login']);

        sessionStorage.setItem("message","Registration successful. please login now");

    }


}
