import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkAccordionOverviewExampleComponent } from './cdk-accordion-overview-example.component';

describe('CdkAccordionOverviewExampleComponent', () => {
  let component: CdkAccordionOverviewExampleComponent;
  let fixture: ComponentFixture<CdkAccordionOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkAccordionOverviewExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkAccordionOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
