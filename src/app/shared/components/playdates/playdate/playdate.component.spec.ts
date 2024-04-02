import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaydateComponent } from './playdate.component';

describe('PlaydateComponent', () => {
  let component: PlaydateComponent;
  let fixture: ComponentFixture<PlaydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaydateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
