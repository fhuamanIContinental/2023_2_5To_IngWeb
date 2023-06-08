import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoDocumentoRequest } from 'src/app/modesl/tipo-documento-request.model';
import { TipoDocumentoResponse } from 'src/app/modesl/tipo-documento-response.model';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-documento-registro',
  templateUrl: './tipo-documento-registro.component.html',
  styleUrls: ['./tipo-documento-registro.component.scss']
})
export class TipoDocumentoRegistroComponent implements OnInit {


  /** TODO: VARIABLES DE ENTRADA */
  @Input() title: string = "TITULO DEL MODAL";
  @Input() item: TipoDocumentoResponse = new TipoDocumentoResponse();
  @Input() accionRealizar: number = 0;


  /** TODO: VARIABLES DE SALIDA ==> se recomienda tenga el sufijo emmi */
  @Output() closeModalEmmit = new EventEmitter<boolean>;

  /**TODO: DECLARANDO EL FORMULARIO */
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _tipoDocumentoService: TipoDocumentoService
  ) {
    this.myForm = this.fb.group({
      id: [null, [Validators.required]],
      codigo: [null, [Validators.required]],
      descripcion: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {

    // this.myForm.controls['id'].setValue(this.item.id)
    // this.myForm.controls['codigo'].setValue(this.item.codigo)
    // this.myForm.controls['descripcion'].setValue(this.item.descripcion)
    this.myForm.patchValue(this.item);

  }

  closeModal(res: boolean) {
    this.closeModalEmmit.emit(res);
  }


  guardar() {
    let frmValue: TipoDocumentoRequest = this.myForm.getRawValue();
    switch (this.accionRealizar) {
      case 1: this.crearRegistro(frmValue); break;
      case 2: this.actualizarRegistro(frmValue); break;
    }
    // if (this.accionRealizar == 1) {
    //   this.crearRegistro(frmValue);
    // }
    // else {
    //   this.actualizarRegistro(frmValue);
    // }
  }

  crearRegistro(req: TipoDocumentoRequest) {
    this._tipoDocumentoService.create(req).subscribe({
      next: (data: TipoDocumentoResponse) => {
        Swal.fire({
          icon: 'success',
          title: 'Felicitaciones',
          text: 'Registro creado de forma correcta',
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000
        });
      },
      error: () => { },
      complete: () => {
        this.closeModal(true);
      }
    });

  }

  actualizarRegistro(req: TipoDocumentoRequest) {
    this._tipoDocumentoService.update(req).subscribe({
      next: (data: TipoDocumentoResponse) => {
        Swal.fire({
          icon: 'success',
          title: 'Felicitaciones',
          text: 'Registro actualizado de forma correcta',
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000
        });
      },
      error: () => { },
      complete: () => {
        this.closeModal(true);
      }
    });

  }

}
