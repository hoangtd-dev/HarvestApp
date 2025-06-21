import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SongComponent } from '../song/song.component';

@Component({
  selector: 'app-dashboard',
  imports: [SongComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
