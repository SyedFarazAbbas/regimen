import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkTableBasicExampleComponent } from './cdk-table-basic-example.component';

describe('CdkTableBasicExampleComponent', () => {
  let component: CdkTableBasicExampleComponent;
  let fixture: ComponentFixture<CdkTableBasicExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkTableBasicExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkTableBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
