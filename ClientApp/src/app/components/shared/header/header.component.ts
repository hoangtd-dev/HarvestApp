import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // private readonly _store = inject(Store);
  // public themes$: Observable<IThemeState[]>;
  // public isDarkTheme$: Observable<boolean>;
  // constructor() {
  //   this.themes$ = this._store.select(selectAllThemes);
  //   this.isDarkTheme$ = this._store.select(selectIsDarkTheme);
  // }
  // public changeTheme(id: number): void {
  //   this._store.dispatch(changeTheme({ id }));
  // }
}
