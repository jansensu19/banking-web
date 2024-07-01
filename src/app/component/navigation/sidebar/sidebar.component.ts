import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {
  isCollapsed = true;

  menuCategories = [
    {
      name: 'Main',
      items: [
        { icon: 'home', label: 'Home', routerLink: '/home' },
        { icon: 'dashboard', label: 'Dashboard', routerLink: '/dashboard' }
      ]
    },
    {
      name: 'Second',
      items: [
        { icon: 'home', label: 'Home', routerLink: '/second-home' },
        { icon: 'person', label: 'Profile', routerLink: '/profile' }
      ]
    }
    // Add more categories as needed
  ];

  constructor() { }

  ngOnInit() { }

  onMouseEnter() {
    this.isCollapsed = false;
  }

  onMouseLeave() {
    this.isCollapsed = true;
  }
}
