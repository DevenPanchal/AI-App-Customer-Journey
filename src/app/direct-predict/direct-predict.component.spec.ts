import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectPredictComponent } from './direct-predict.component';

describe('DirectPredictComponent', () => {
  let component: DirectPredictComponent;
  let fixture: ComponentFixture<DirectPredictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectPredictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
