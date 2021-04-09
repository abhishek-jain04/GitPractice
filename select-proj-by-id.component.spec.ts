import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProjByIdComponent } from './select-proj-by-id.component';

describe('SelectProjByIdComponent', () => {
  let component: SelectProjByIdComponent;
  let fixture: ComponentFixture<SelectProjByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProjByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProjByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
