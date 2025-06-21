import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-bible',
  imports: [AsyncPipe],
  templateUrl: './bible.component.html',
  styleUrl: './bible.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleComponent {
}
