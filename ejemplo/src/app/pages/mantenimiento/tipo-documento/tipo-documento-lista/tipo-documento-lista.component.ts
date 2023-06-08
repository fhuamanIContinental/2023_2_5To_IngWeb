import { Component, OnInit } from '@angular/core';
import { TipoDocumentoResponse } from 'src/app/modesl/tipo-documento-response.model';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-documento-lista',
  templateUrl: './tipo-documento-lista.component.html',
  styleUrls: ['./tipo-documento-lista.component.scss']
})
export class TipoDocumentoListaComponent implements OnInit {


  mostrarFrmRegistro: boolean = false;
  tiposDocumentos: TipoDocumentoResponse[] = [];
  tipoDocumentoSeleccionado: TipoDocumentoResponse = new TipoDocumentoResponse();
  tituloModal: string = "";
  accionRealizar: number = 0; // 1 ==> crear || 2 para actualizar
  constructor(
    private _tipoDocumentoService: TipoDocumentoService
  ) {

  }


  /**
   * JQUERY ==> document.ready() ==> 
   * es el evento que se ejecuta cuando el documento (HTML), esta listo para ser mostrado en el navegador
   */
  ngOnInit(): void {

    console.log("ON INIT");
    this.listarTiposDocumento();
  }


  listarTiposDocumento() {
    this._tipoDocumentoService.getAll().subscribe({
      next: (data: TipoDocumentoResponse[]) => {
        console.log("tipos de documento", data);
        this.tiposDocumentos = data;
      },
      error: () => { },
      complete: () => { }
    });
  }


  nuevoItem() {
    this.accionRealizar = 1;
    this.tipoDocumentoSeleccionado = new TipoDocumentoResponse();
    this.tituloModal = "CREAR TIPO DOCUMENTO";
    setTimeout(() => {
      this.mostrarFrmRegistro = true;
    }, 200);
  }

  editarItem(item: TipoDocumentoResponse) {
    this.accionRealizar = 2;
    this.tipoDocumentoSeleccionado = item;
    this.tituloModal = "EDITAR TIPO DOCUMENTO";
    setTimeout(() => {
      this.mostrarFrmRegistro = true;
    }, 200);

  }

  eliminarItem(id: number) {

    Swal.fire({
      title: '¿Estas seguro de eliminar el registro?',
      text: 'Este proceso no es reversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this._tipoDocumentoService.delete(id).subscribe({
          next: (data: number) => {
            Swal.fire({
              icon: 'success',
              title: 'Felicitaciones',
              text: 'Registro eliminado de forma correcta',
              position: 'top-end',
              showConfirmButton: false,
              timer: 4000
            });
          },
          error: () => {
            alert("ocurrio un error");
          },
          complete: () => {
            this.listarTiposDocumento();
          }
        });
      }
      return result.isConfirmed;
    }
    ).catch((er) => {
      return false;
    });




    console.log("hizo clic en ==> eliminarItem");
  }

  recibirRespuestaFrm(res: boolean) {
    if (res) {
      this.listarTiposDocumento();
    }
    this.accionRealizar = 0;
    this.mostrarFrmRegistro = false;
  }

}
