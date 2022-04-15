import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioArticoloComponent } from './dettaglio-articolo.component';

describe('DettaglioArticoloComponent', () => {
  let component: DettaglioArticoloComponent;
  let fixture: ComponentFixture<DettaglioArticoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioArticoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
