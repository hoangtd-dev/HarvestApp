import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsDarkTheme } from '@store/selectors';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _rendererFactory = inject(RendererFactory2);
  private _store = inject(Store);

  private _renderer: Renderer2;

  constructor() {
    this._renderer = this._rendererFactory.createRenderer(null, null);
    this._store.select(selectIsDarkTheme).subscribe((isDarkTheme: boolean) => {
      const htmlElement = this._renderer.selectRootElement('html', true);

      if (isDarkTheme) {
        this._renderer.addClass(htmlElement, 'dark');
      } else {
        this._renderer.removeClass(htmlElement, 'dark');
      }
    });
  }
}
