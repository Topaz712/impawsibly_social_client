import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlaydateComponent } from './create-playdate.component';

describe('CreatePlaydateComponent', () => {
  let component: CreatePlaydateComponent;
  let fixture: ComponentFixture<CreatePlaydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlaydateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePlaydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
