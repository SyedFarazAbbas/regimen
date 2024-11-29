import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimenLibraryComponent } from './regimen-library.component';

describe('RegimenLibraryComponent', () => {
  let component: RegimenLibraryComponent;
  let fixture: ComponentFixture<RegimenLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegimenLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegimenLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
