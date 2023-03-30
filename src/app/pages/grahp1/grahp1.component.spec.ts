import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grahp1Component } from './grahp1.component';

describe('Grahp1Component', () => {
  let component: Grahp1Component;
  let fixture: ComponentFixture<Grahp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grahp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grahp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
