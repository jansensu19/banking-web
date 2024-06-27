// theme.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark'
}

export enum ThemeScheme {
  Rose = 'rose',
  Indigo = 'indigo',
  Vintage = 'vintage'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeModeSubject: BehaviorSubject<ThemeMode>;
  private themeSchemeSubject: BehaviorSubject<ThemeScheme>;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.themeModeSubject = new BehaviorSubject<ThemeMode>(savedTheme ? (savedTheme as ThemeMode) : ThemeMode.Light);

    const savedThemeScheme = localStorage.getItem('theme-scheme') as ThemeScheme || ThemeScheme.Rose;
    this.themeSchemeSubject = new BehaviorSubject<ThemeScheme>(savedThemeScheme);
    this.applyTheme(savedThemeScheme);
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

  getThemeScheme(): BehaviorSubject<ThemeScheme> {
    return this.themeSchemeSubject;
  }

  setThemeScheme(scheme: ThemeScheme): void {
    localStorage.setItem('theme-scheme', scheme);
    this.themeSchemeSubject.next(scheme);
    this.applyTheme(scheme);
  }

  private applyTheme(scheme: ThemeScheme): void {
    document.documentElement.setAttribute('data-theme', scheme);
  }
}
