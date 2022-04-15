import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModarticoloComponent } from './modarticolo.component';

describe('ModarticoloComponent', () => {
  let component: ModarticoloComponent;
  let fixture: ComponentFixture<ModarticoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModarticoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModarticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
