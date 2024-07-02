export interface MenuItem {
  icon: string;
  label: string;
  routerLink: string;
  show?: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}
