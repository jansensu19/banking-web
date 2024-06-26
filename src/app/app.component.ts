import { Component, OnInit } from '@angular/core';
import { ThemeMode, ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getThemeMode().subscribe(mode => {
      if (mode === ThemeMode.Dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }
  title = 'banking-web';

  get currentYear(): number
    {
        return new Date().getFullYear();
    }
}
