import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptxGeneratorComponent } from './pptx-generator.component';

describe('PptxGeneratorComponent', () => {
  let component: PptxGeneratorComponent;
  let fixture: ComponentFixture<PptxGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PptxGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PptxGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
