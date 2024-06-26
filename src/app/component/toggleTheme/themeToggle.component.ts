import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThemeMode, ThemeService } from '../../core/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: 'themeToggle.component.html',
  styleUrls: ['themeToggle.component.scss']
})
export class ThemeToggleComponent {
  @Input() currentTheme: ThemeMode | undefined;
  @Output() themeChanged = new EventEmitter<ThemeMode>();

  constructor(private themeService: ThemeService) {}


  toggleTheme(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const newTheme = isChecked ? ThemeMode.Dark : ThemeMode.Light;
    this.themeService.setThemeMode(newTheme);
    this.themeChanged.emit(newTheme);
  }
}
