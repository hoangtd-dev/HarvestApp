import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { changeTheme } from '@store/actions';
import { selectIsDarkTheme } from '@store/selectors';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly _store = inject(Store);

  isDarkTheme = toSignal(this._store.select(selectIsDarkTheme), {
    initialValue: false,
  });

  iconCode = computed(() => (this.isDarkTheme() ? 'dark_mode' : 'light_mode'));

  public changeTheme(): void {
    this._store.dispatch(changeTheme());
  }
}
