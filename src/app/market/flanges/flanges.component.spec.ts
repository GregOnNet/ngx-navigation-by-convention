import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlangesComponent } from './flanges.component';

describe('FlangesComponent', () => {
  let component: FlangesComponent;
  let fixture: ComponentFixture<FlangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
