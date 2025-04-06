import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  showFoodDropdown = false; // Initialize dropdown visibility
  constructor(private router: Router){
     // Listen to route changes and toggle dropdown visibility
      this.router.events.subscribe(() => {
      this.showDropdown = this.router.url == '/homescreen'; // Hide dropdown on the login page
    });
  }


navigateToHome() {
  this.router.navigate(['/homescreen']); // Navigates to the home route
}

toggleFoodDropdown() {
  this.showFoodDropdown = !this.showFoodDropdown; // Toggle Food Products dropdown
}
// Close the dropdown when clicking outside of it
// This will close the dropdown if the user clicks anywhere outside of it
@HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.showFoodDropdown = false; // Close the dropdown if clicked outside
    }
  }
}
