import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /**
     * SI RETORNAMOS TRUE ==> PERMITE ACCEDER A LA RUTA
     * SI RETORNAMOS FALSE ==> RECHAZA EL ACCESO A LA RUTA
     *  */
    /**
     * COMO SABEMOS SI EL USUARIO REALIZO EL PROCESO DEL LOGIN
     */
    let token = sessionStorage.getItem("token");
    if (!token) // ==> undefined null "" 0
    {
      alert("NO TIENES PERMISO \n POR FAVOR LOGUEATE");
      this._router.navigate(['']);
    }
    return true;;
  }
}
