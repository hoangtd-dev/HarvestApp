import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../../features/shared/header/header.component';
import { SidebarComponent } from '../../features/shared/sidebar/sidebar.component';

@Component({
  selector: 'app-authenticated-layout',
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './authenticated-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticatedLayoutComponent {}
