import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'shc-non-authenticated-layout',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './non-authenticated-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NonAuthenticatedLayoutComponent {}
