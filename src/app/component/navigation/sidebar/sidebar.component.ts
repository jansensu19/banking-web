import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { RoleConfigService } from '../../../core/service/roleconfig.service';
import { MenuCategory } from '../../../model/menu-item,interface';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SideBarComponent implements OnInit {
  isCollapsed = true;
  menuCategories: MenuCategory[] = [
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
        { icon: 'second-home', label: 'Home', routerLink: '/second-home' },
        { icon: 'person', label: 'Profile', routerLink: '/profile' }
      ]
    }
  ];

  constructor(
    private authService: AuthService,
    private roleConfigService: RoleConfigService
  ) {}

  ngOnInit() {
    this.setMenuCategories();
  }

  onMouseEnter() {
    this.isCollapsed = false;
  }

  onMouseLeave() {
    this.isCollapsed = true;
  }

  setMenuCategories() {
    const userRoles = this.authService.getUserRoles();
    this.menuCategories = this.roleConfigService.getUserNavItems(userRoles, this.menuCategories);
  }
}
