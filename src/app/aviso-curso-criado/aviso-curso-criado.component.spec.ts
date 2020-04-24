import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoCursoCriadoComponent } from './aviso-curso-criado.component';

describe('AvisoCursoCriadoComponent', () => {
  let component: AvisoCursoCriadoComponent;
  let fixture: ComponentFixture<AvisoCursoCriadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoCursoCriadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoCursoCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
