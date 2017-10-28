import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholItemComponent } from './alcohol-item.component';

describe('AlcoholItemComponent', () => {
  let component: AlcoholItemComponent;
  let fixture: ComponentFixture<AlcoholItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
