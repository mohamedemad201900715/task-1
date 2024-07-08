import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNavbarComponent } from './mini-navbar.component';

describe('MiniNavbarComponent', () => {
  let component: MiniNavbarComponent;
  let fixture: ComponentFixture<MiniNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniNavbarComponent]
    });
    fixture = TestBed.createComponent(MiniNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
