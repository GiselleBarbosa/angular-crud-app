import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasAddComponent } from './categorias-add.component';

describe('CategoriasAddComponent', () => {
  let component: CategoriasAddComponent;
  let fixture: ComponentFixture<CategoriasAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
