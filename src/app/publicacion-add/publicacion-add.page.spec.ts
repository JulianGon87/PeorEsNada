import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicacionAddPage } from './publicacion-add.page';

describe('PublicacionAddPage', () => {
  let component: PublicacionAddPage;
  let fixture: ComponentFixture<PublicacionAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
