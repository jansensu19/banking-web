import { Component, EventEmitter, OnDestroy, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { ThemeMode, ThemeService } from '../../core/theme/theme.service';

@Component({
    selector     : 'empty-layout',
    templateUrl  : './empty.component.html',
    encapsulation: ViewEncapsulation.None
})
export class EmptyLayoutComponent implements OnDestroy
{
  currentTheme: ThemeMode | undefined;
  @Output() onThemeChanged = new EventEmitter<ThemeMode>();

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    authenticated = true
    /**
     * Constructor
     */
    constructor(
      private themeService: ThemeService
    )
    {
    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    toggleTheme(newTheme: ThemeMode): void {
      this.onThemeChanged.emit(newTheme);
    }
}
