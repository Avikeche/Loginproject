import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  // provideHttpClient() in app.config.ts file otherwise nullInjectionError will occur
  
   constructor(private httpclient:HttpClient) 
   {


   }

  saveToDB(user:User)
  {
       return this.httpclient.post("http://localhost:8080/saveToDB" , user);
  }

  validate(user:User):Observable<boolean>
  {
       return this.httpclient.post<boolean>("http://localhost:8080/validate",user);

       // [true]Observable object
  }

  
  // getUser('sumit')

  getUser(username:string)
  {
      return this.httpclient.get<User>("http://localhost:8080/getUser/"+username);

      // http://localhost:8080/getUser/sumit

      // [ ( ) User class object  subscribe()] Observable object

      // [ ( ) User class object  get() ] ArrayList object
  }

  deleteUser(username:string)
  {
    return this.httpclient.delete<boolean>("http://localhost:8080/deleteUser/"+username);
  }


  getAllUsers()
  {
      return this.httpclient.get<User[]>("http://localhost:8080/getAllUsers");
  }
}


export class User
{
  username:string;
  password:string;
  mobno:number;
  emailid:string;


  constructor(username:string,password:string,mobno:number,emailid:string)
  {
    this.username=username;
    this.password=password;
    this.mobno=mobno;
    this.emailid=emailid;

  }
}
