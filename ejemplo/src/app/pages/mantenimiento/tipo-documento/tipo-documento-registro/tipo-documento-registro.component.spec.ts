import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoRegistroComponent } from './tipo-documento-registro.component';

describe('TipoDocumentoRegistroComponent', () => {
  let component: TipoDocumentoRegistroComponent;
  let fixture: ComponentFixture<TipoDocumentoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDocumentoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDocumentoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
