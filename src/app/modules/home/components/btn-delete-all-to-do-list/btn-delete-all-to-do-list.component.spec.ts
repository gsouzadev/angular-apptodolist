import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeleteAllToDoListComponent } from './btn-delete-all-to-do-list.component';

describe('BtnDeleteAllToDoListComponent', () => {
  let component: BtnDeleteAllToDoListComponent;
  let fixture: ComponentFixture<BtnDeleteAllToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDeleteAllToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDeleteAllToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
