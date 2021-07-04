import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedCalcsComponent } from './speed-calcs.component';

describe('SpeedCalcsComponent', () => {
  let component: SpeedCalcsComponent;
  let fixture: ComponentFixture<SpeedCalcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedCalcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedCalcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
