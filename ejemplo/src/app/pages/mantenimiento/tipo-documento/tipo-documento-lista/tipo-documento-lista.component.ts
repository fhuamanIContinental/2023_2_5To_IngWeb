import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { typeFilterConst } from 'src/app/constants/general.const';
import { FilterForm } from 'src/app/modesl/filter-form';
import { FilterPaginationRequest } from 'src/app/modesl/filter-pagination-request.model';
import { FilterPaginationResponse } from 'src/app/modesl/filter-pagination-response.model';
import { ItemFilter } from 'src/app/modesl/generic-filter-request.model';
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
  modalRef?: BsModalRef;
  filtersForm: FilterForm[] = [];
  genericFilter: FilterPaginationRequest = new FilterPaginationRequest();
  cantidadRegistrosTotal: number = 0;
  currentPage = 1;
  page: number = 1;
  constructor(
    private _tipoDocumentoService: TipoDocumentoService,
    private modalService: BsModalService
  ) {
    this.filtersForm.push(new FilterForm("id", "ID", typeFilterConst.TextControl, undefined));
    this.filtersForm.push(new FilterForm("codigo", "CÓDIGO", typeFilterConst.TextControl, undefined));
    this.filtersForm.push(new FilterForm("descripcion", "DESCRIPCIÓN", typeFilterConst.TextControl, undefined));
  }


  /**
   * JQUERY ==> document.ready() ==> 
   * es el evento que se ejecuta cuando el documento (HTML), esta listo para ser mostrado en el navegador
   */
  ngOnInit(): void {

    //console.log("ON INIT");
    this.listarTiposDocumento();
  }


  listarTiposDocumento() {
    // this._tipoDocumentoService.getAll().subscribe({
    //   next: (data: TipoDocumentoResponse[]) => {
    //     console.log("tipos de documento", data);
    //     this.tiposDocumentos = data;
    //   },
    //   error: () => { },
    //   complete: () => { }
    // });


    this._tipoDocumentoService.getByFilter(this.genericFilter).subscribe({
      next: (data: FilterPaginationResponse<TipoDocumentoResponse>) => {
        console.log("tipos de documento", data);
        this.tiposDocumentos = data.lista;
        this.cantidadRegistrosTotal = data.cantidadTotalRegistros;
      },
      error: () => { },
      complete: () => { }
    });

  }


  nuevoItem(template: TemplateRef<any>) {
    this.accionRealizar = 1;
    this.tipoDocumentoSeleccionado = new TipoDocumentoResponse();
    this.tituloModal = "CREAR TIPO DOCUMENTO";
    // setTimeout(() => {
    //   this.mostrarFrmRegistro = true;
    // }, 200);
    this.openModal(template);
  }

  editarItem(item: TipoDocumentoResponse, template: TemplateRef<any>) {
    this.accionRealizar = 2;
    this.tipoDocumentoSeleccionado = item;
    this.tituloModal = "EDITAR TIPO DOCUMENTO";
    // setTimeout(() => {
    //   this.mostrarFrmRegistro = true;
    // }, 200);
    this.openModal(template);
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

    // this.mostrarFrmRegistro = false;
    this.closeModal();
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef?.hide();
  }

  recibirNuevosFiltros(filtros: ItemFilter[]) {

    this.genericFilter = new FilterPaginationRequest();
    this.genericFilter.filtros = filtros;
    debugger;
    this.listarTiposDocumento();


  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    this.genericFilter.pagina = event.page;
    this.listarTiposDocumento();
  }


}

