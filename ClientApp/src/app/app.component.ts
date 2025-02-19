import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BibleComponent } from './components/bible/bible.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ClientApp';
}
