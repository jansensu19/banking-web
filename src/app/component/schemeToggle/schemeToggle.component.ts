import { Component } from '@angular/core';
import { ThemeScheme, ThemeService } from '../../core/theme/theme.service';

@Component({
  selector: 'app-scheme-toggle',
  templateUrl: 'schemeToggle.component.html',
  styleUrls: ['schemeToggle.component.scss']
})
export class SchemeToggleComponent {
  currentThemeScheme: ThemeScheme | undefined;
  themeSchemes: ThemeScheme[] = Object.values(ThemeScheme);

  constructor(private themeService: ThemeService) {
    this.themeService.getThemeScheme().subscribe(scheme => {
      this.currentThemeScheme = scheme;
    });
  }

  switchTheme(scheme: ThemeScheme): void {
    this.themeService.setThemeScheme(scheme);
  }
}
