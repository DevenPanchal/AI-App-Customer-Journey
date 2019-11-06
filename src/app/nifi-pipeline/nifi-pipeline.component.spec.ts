import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NifiPipelineComponent } from './nifi-pipeline.component';

describe('NifiPipelineComponent', () => {
  let component: NifiPipelineComponent;
  let fixture: ComponentFixture<NifiPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NifiPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NifiPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
