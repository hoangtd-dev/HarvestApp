import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-song',
  imports: [RouterOutlet],
  templateUrl: './song.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongComponent {}
