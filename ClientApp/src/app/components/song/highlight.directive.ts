import { Directive, ElementRef, inject, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true,
})
export class HighlightDirective implements OnChanges {
  @Input('appStyle') color: { [key: string]: string };
  element = inject(ElementRef);

  ngOnChanges(changes: SimpleChanges): void {
    Object.entries(this.color).forEach(([key, value]: [string, string]) => {
      this.element.nativeElement.style[key] = value;
    });
  }
}
