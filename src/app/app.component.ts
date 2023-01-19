import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Pizzas';
  loggedIn = false;
  subscriptionLoggedIn: Subscription;
  
  constructor(private authService: AuthService, private router: Router) {
    this.loggedIn = localStorage.getItem('token') != null;
    this.subscriptionLoggedIn = this.authService.loggedInObservable.subscribe({
      next: (loggedIn) => {
        this.loggedIn = loggedIn;
      }
    })
  }

  
  logout() {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }

}
