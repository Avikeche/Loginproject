import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit
{
  welcomemessage:any="";

  ngOnInit(): void 
  {
    this.welcomemessage=sessionStorage.getItem("welcomemessage");
  }
 
}
