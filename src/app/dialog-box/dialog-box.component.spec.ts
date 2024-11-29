import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIalogBoxComponent } from './dialog-box.component';

describe('DIalogBoxComponent', () => {
  let component: DIalogBoxComponent;
  let fixture: ComponentFixture<DIalogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DIalogBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIalogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
