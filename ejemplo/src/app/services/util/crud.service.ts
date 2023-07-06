import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterPaginationRequest } from 'src/app/modesl/filter-pagination-request.model';
import { FilterPaginationResponse } from 'src/app/modesl/filter-pagination-response.model';

@Injectable({
  providedIn: 'root'
})


/**TIENE LOS METODOS DE CRUD IMPLEMENTADOS 
 * t ==> REQUEST
 * Y ==> RESPONSE
 * 
*/
export class CrudService<T, Y> {

  constructor(
    protected _http: HttpClient,
    @Inject('url_service') public url_service: string

  ) { }


  getAll(): Observable<Y[]> {
    
    return this._http.get<Y[]>(this.url_service);
  }

  getById(id: number): Observable<Y> {
    return this._http.get<Y>(`${this.url_service}${id}`);
  }

  create(request: T): Observable<Y> {
    return this._http.post<Y>(this.url_service, request);
  }

  update(request: T): Observable<Y> {
    return this._http.put<Y>(this.url_service, request);
  }

  delete(id: number): Observable<number> {
    return this._http.delete<number>(`${this.url_service}${id}`);
  }

  getByFilter(filtros: FilterPaginationRequest): Observable<FilterPaginationResponse<Y>> {
    /** SIN INTERCEPTOR */
    // let token = sessionStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}`
    // })
    // return this._http.post<FilterPaginationResponse<Y>>(`${this.url_service}filter`, filtros, { headers });
    /** CON INTERCEPTOR */
    return this._http.post<FilterPaginationResponse<Y>>(`${this.url_service}filter`, filtros);
  }
}
