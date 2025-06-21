import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-song',
  imports: [],
  templateUrl: './song.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongComponent {}
