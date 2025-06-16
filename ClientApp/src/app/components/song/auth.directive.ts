import { Directive, inject, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective implements OnInit {
  // auth service
  private features: [];
  private template = inject(TemplateRef);
  private container = inject(ViewContainerRef);

  ngOnInit(): void {
    let isFeatureEnable = false;

    setTimeout(() => {
      isFeatureEnable = true;
      this.initialFeature(isFeatureEnable);
    }, 5000);
  }

  initialFeature(isFeatureEnable: boolean) {
    if (isFeatureEnable) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
