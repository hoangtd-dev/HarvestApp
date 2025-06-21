import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleComponent {}
