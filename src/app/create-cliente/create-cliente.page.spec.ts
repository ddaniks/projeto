import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateClientePage } from './create-cliente.page';

describe('CreateClientePage', () => {
  let component: CreateClientePage;
  let fixture: ComponentFixture<CreateClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
