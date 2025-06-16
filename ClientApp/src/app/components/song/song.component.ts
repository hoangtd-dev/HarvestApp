import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  inject,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { CustomBindingDirective } from './custom-binding.directive';
import { AuthDirective } from './auth.directive';
import { ModifyTextPipe } from './modify-text.pipe';

@Component({
  selector: 'app-song',
  imports: [HighlightDirective, CustomBindingDirective, AuthDirective, ModifyTextPipe],
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongComponent implements OnInit, AfterContentInit {
  @ContentChild('contentRef') contentByAttribute: ElementRef;
  username: string = '';
  test = '';

  private zone = inject(NgZone);

  get title() {
    console.log('getter');

    return `Title - ${Math.random()}`;
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.test = 'haha';
    // }, 5000);
    // this.zone.runOutsideAngular(() => {});
  }
  ngAfterContentInit(): void {
    console.log('After Content Init: ', this.contentByAttribute);
  }

  submit() {
    console.log(`username: ${this.username}`);
    setTimeout(() => {
      console.log('time up!!!');
    }, 3000);
  }
}
