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
  showFashionDropdown = false;
  showaffiliateDropdown = false;
  showcookbooksDropdown = false;
  showreviewsDropdown = false;
  showmyaccountDropdown = false;
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
  this.showFoodDropdown = !this.showFoodDropdown;
  if (this.showFoodDropdown) {
    this.showFashionDropdown = false; // Close Fashion dropdown
    this.showaffiliateDropdown = false; // Close affiliate dropdown
    this.showreviewsDropdown = false; // Close reviews dropdown
    this.showcookbooksDropdown = false; // Close cookbooks dropdown
    this.showmyaccountDropdown = false; // Close my account dropdown
  }
  }
toggleFashionDropdown() {
  this.showFashionDropdown = !this.showFashionDropdown;
  if (this.showFashionDropdown) {
    this.showFoodDropdown = false; // Close Food dropdown
    this.showaffiliateDropdown = false; // Close affiliate dropdown
    this.showreviewsDropdown = false; // Close reviews dropdown
    this.showcookbooksDropdown = false; // Close cookbooks dropdown
    this.showmyaccountDropdown = false; // Close my account dropdown
  }
}
toggleaffiliateDropdown() {
  this.showaffiliateDropdown = !this.showaffiliateDropdown;
  if (this.showaffiliateDropdown) { 
    this.showFashionDropdown = false; // Close Fashion dropdown
    this.showFoodDropdown = false; // Close Food dropdown 
    this.showreviewsDropdown = false; // Close reviews dropdown
    this.showmyaccountDropdown = false; // Close my account dropdown
    this.showcookbooksDropdown = false; // Close cookbooks dropdown
  }
}
togglecookbooksDropdown() {
  this.showcookbooksDropdown = !this.showcookbooksDropdown; // Toggle cookbooks dropdown
  if (this.showcookbooksDropdown) {
    this.showFashionDropdown = false; // Close Fashion dropdown
    this.showFoodDropdown = false; // Close Food dropdown
    this.showreviewsDropdown = false; // Close reviews dropdown
    this.showaffiliateDropdown = false; // Close affiliate dropdown
    this.showmyaccountDropdown = false; // Close my account dropdown
  }
}
togglereviewsDropdown() {
  this.showreviewsDropdown = !this.showreviewsDropdown;
  if (this.showreviewsDropdown) {
    this.showFoodDropdown = false; // Close Food dropdown
    this.showFashionDropdown = false; // Close Fashion dropdown
    this.showaffiliateDropdown = false; // Close affiliate dropdown
    this.showcookbooksDropdown = false; // Close cookbooks dropdown
    this.showmyaccountDropdown = false; // Close my account dropdown
  }
  }
togglemyaccountDropdown() {
  this.showmyaccountDropdown = !this.showmyaccountDropdown;
  if (this.showmyaccountDropdown) {
    this.showFashionDropdown = false; // Close Fashion dropdown
    this.showFoodDropdown = false; // Close Food dropdown 
    this.showreviewsDropdown = false; // Close reviews dropdown
    this.showaffiliateDropdown = false; // Close affiliate dropdown
    this.showcookbooksDropdown = false; // Close cookbooks dropdown
  }}

  

// Close the dropdown when clicking outside of it
// This will close the dropdown if the user clicks anywhere outside of it
@HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.showFoodDropdown = false; // Close the dropdown if clicked outside
      this.showFashionDropdown = false; // Close the dropdown if clicked outside
      this.showaffiliateDropdown = false; // Close the dropdown if clicked outside
      this.showreviewsDropdown = false; // Close the dropdown if clicked outside
      this.showcookbooksDropdown = false; // Close the dropdown if clicked outside
      this.showmyaccountDropdown = false; // Close the dropdown if clicked outside
    }
  }
}
