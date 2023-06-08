import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumentoResponse } from '../modesl/tipo-documento-response.model';
import { TipoDocumentoRequest } from '../modesl/tipo-documento-request.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private url: string = "https://localhost:7171/api/TipoDocumento/";
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<TipoDocumentoResponse[]> {
    return this.http.get<TipoDocumentoResponse[]>(this.url);
  }

  getById(id: number): Observable<TipoDocumentoResponse> {
    return this.http.get<TipoDocumentoResponse>(`${this.url}${id}`);
  }

  create(request: TipoDocumentoRequest): Observable<TipoDocumentoResponse> {
    return this.http.post<TipoDocumentoResponse>(this.url, request);
  }

  update(request: TipoDocumentoRequest): Observable<TipoDocumentoResponse> {
    return this.http.put<TipoDocumentoResponse>(this.url, request);
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.url}${id}`);
  }

}