import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMobile = false;

  constructor(private router:Router){
    this.isMobile = this.checkIfMobile();
  }
  navigateTo(route: string): void {
      this.router.navigateByUrl(route);
  }

  private checkIfMobile(): boolean {
      return window.innerWidth < 768; 
  }

}
