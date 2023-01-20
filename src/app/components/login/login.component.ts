import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
  loginUserData = new User();
  isAdminSubscription : Subscription;
  
  constructor(private authService: AuthService, private router: Router) {
    this.isAdminSubscription = this.authService.isAdminObservable.subscribe({
      next: (isAdmin) => {
          if(!isAdmin) this.router.navigate(["/cart"]);
          else this.router.navigate(["/admin"]);
        }
    })
  }
  
  loginUser(){
    this.authService.loginUser(this.loginUserData)
  }
}
