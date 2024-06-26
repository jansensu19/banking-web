import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ThemeMode } from '../../core/theme/theme.service';

@Component({
  selector: 'basic-layout',
  templateUrl: 'basic.component.html',
  styleUrls: ['basic.component.scss']
})

export class BasicLayoutComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  currentTheme: ThemeMode | undefined;
  @Output() onThemeChanged = new EventEmitter<ThemeMode>();
  constructor(
  ) { }

  ngOnDestroy(): void
    {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

  ngOnInit() {
  }

  get currentYear(): number
    {
        return new Date().getFullYear();
    }

    toggleTheme(newTheme: ThemeMode): void {
      this.onThemeChanged.emit(newTheme);
    }
}
