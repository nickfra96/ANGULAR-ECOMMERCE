import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArtComponent } from './new-art.component';

describe('NewArtComponent', () => {
  let component: NewArtComponent;
  let fixture: ComponentFixture<NewArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
