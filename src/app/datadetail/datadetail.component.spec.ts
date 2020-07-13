import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadetailComponent } from './datadetail.component';

describe('DatadetailComponent', () => {
  let component: DatadetailComponent;
  let fixture: ComponentFixture<DatadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
