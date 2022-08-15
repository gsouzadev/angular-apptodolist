import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputToDoListComponent } from './input-to-do-list.component';

describe('InputToDoListComponent', () => {
  let component: InputToDoListComponent;
  let fixture: ComponentFixture<InputToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
