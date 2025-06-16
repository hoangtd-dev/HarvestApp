import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'input[appCustomBinding]',
  standalone: true,
})
export class CustomBindingDirective {
  @Input('appCustomBinding') value?: string;
  @Output('appCustomBindingChange') update = new EventEmitter<string>();

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event'])
  onInput($event: any) {
    this.value = $event.target.value;
    this.update.emit($event.target.value);
  }
}
