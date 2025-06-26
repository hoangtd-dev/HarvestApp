import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
})
export class BibleComponent {}
