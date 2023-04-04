import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopNavbarComponent } from './workshop-navbar.component';

describe('WorkshopNavbarComponent', () => {
  let component: WorkshopNavbarComponent;
  let fixture: ComponentFixture<WorkshopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
