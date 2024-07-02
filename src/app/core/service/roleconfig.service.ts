import { Injectable } from '@angular/core';
import { MenuCategory } from '../../model/menu-item,interface';

@Injectable({
  providedIn: 'root'
})
export class RoleConfigService {

  constructor() {}

  getUserNavItems(userRoles: any[], menuCategories: MenuCategory[]): MenuCategory[] {
    menuCategories.forEach(category => {
      category.items.forEach(item => {
        item.show = this.isNavItemVisible(item.routerLink, userRoles);
      });
    });

    return menuCategories;
  }

  private isNavItemVisible(nav: string, userRoles: any[]): boolean {
    for (let role of userRoles) {
      if (role.profile.some((profileItem: { nav: any; }) => `/${profileItem.nav}` === nav)) {
        return true;
      }
    }
    return false;
  }
}
