import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homescreen',
  imports: [CommonModule],
  templateUrl: './homescreen.component.html',
  styleUrl: './homescreen.component.scss'
})
export class HomescreenComponent {
  title = 'dashboard-mfe';
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
