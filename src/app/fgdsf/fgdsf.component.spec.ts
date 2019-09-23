import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgdsfComponent } from './fgdsf.component';

describe('FgdsfComponent', () => {
  let component: FgdsfComponent;
  let fixture: ComponentFixture<FgdsfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgdsfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgdsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
