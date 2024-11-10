import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipecategoryComponent } from './edit-recipecategory.component';

describe('EditRecipecategoryComponent', () => {
  let component: EditRecipecategoryComponent;
  let fixture: ComponentFixture<EditRecipecategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecipecategoryComponent]
    });
    fixture = TestBed.createComponent(EditRecipecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
