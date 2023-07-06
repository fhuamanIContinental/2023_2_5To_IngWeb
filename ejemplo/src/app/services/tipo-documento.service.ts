import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumentoResponse } from '../modesl/tipo-documento-response.model';
import { TipoDocumentoRequest } from '../modesl/tipo-documento-request.model';
import { FilterPaginationRequest } from '../modesl/filter-pagination-request.model';
import { FilterPaginationResponse } from '../modesl/filter-pagination-response.model';
import { CrudService } from './util/crud.service';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService extends CrudService<TipoDocumentoRequest,TipoDocumentoResponse>

{

  private url: string = "https://localhost:7171/api/TipoDocumento/";
  constructor(
    protected http: HttpClient
  ) { 
    super(http, "https://localhost:7171/api/TipoDocumento/");
  }




  
}