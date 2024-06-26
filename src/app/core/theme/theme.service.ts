// theme.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeModeSubject: BehaviorSubject<ThemeMode>;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.themeModeSubject = new BehaviorSubject<ThemeMode>(savedTheme ? (savedTheme as ThemeMode) : ThemeMode.Light);
  }

  getThemeMode(): BehaviorSubject<ThemeMode> {
    return this.themeModeSubject;
  }

  setThemeMode(mode: ThemeMode): void {
    localStorage.setItem('theme', mode);
    this.themeModeSubject.next(mode);
  }

  toggleTheme(): void {
    const currentMode = this.themeModeSubject.getValue();
    const newMode = currentMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
    this.setThemeMode(newMode);
  }
}
