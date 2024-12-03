import { Routes } from '@angular/router';

 import { RegisterComponent } from './ragistion/ragistion.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = 
[
   

     {path:'register',component:RegisterComponent},

    {path:'login',component:LoginComponent},
    {path:'user',component:UserComponent},
   {path:'welcome',component:WelcomeComponent},


    
];
