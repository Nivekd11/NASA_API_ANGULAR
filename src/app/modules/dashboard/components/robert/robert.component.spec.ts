import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertComponent } from './robert.component';

describe('RobertComponent', () => {
  let component: RobertComponent;
  let fixture: ComponentFixture<RobertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
