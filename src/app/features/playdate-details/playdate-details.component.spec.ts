import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaydateDetailsComponent } from './playdate-details.component';

describe('PlaydateDetailsComponent', () => {
  let component: PlaydateDetailsComponent;
  let fixture: ComponentFixture<PlaydateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaydateDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaydateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
