import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetUpdateModalComponent } from './pet-update-modal.component';

describe('PetUpdateModalComponent', () => {
  let component: PetUpdateModalComponent;
  let fixture: ComponentFixture<PetUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetUpdateModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
