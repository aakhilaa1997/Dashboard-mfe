import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auth-mfe';
  showDropdown = true;
  constructor(private router: Router){
     // Listen to route changes and toggle dropdown visibility
      this.router.events.subscribe(() => {
      this.showDropdown = this.router.url == '/homescreen'; // Hide dropdown on the login page
    });
  }


navigateToHome() {
  this.router.navigate(['/homescreen']); // Navigates to the home route
}
}
