import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaydatesComponent } from './playdates.component';

describe('PlaydatesComponent', () => {
  let component: PlaydatesComponent;
  let fixture: ComponentFixture<PlaydatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaydatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaydatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
