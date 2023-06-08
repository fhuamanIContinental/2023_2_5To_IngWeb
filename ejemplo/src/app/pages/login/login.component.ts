import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/modesl/login-request.model';
import { LoginResponse } from 'src/app/modesl/login-response.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // loginRequest: = { username: "", password: "" }

  loginRequest: LoginRequest = new LoginRequest();


  //CREACIÓN Y/O CONSTRUCCIÓN DE FORMULARIOS REACTIVOS
  frmLogin: FormGroup;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.frmLogin = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });



  }


  acceder() {


    // this._authService.login(this.loginRequest).subscribe({
    //   next: () => { }, ==> RESPUESTA SATISFACTORÍA
    //   error: () => { }, ==> RESPUESTA ERRONEA
    //   complete: () => { }, ==> SE EJECUTA AL TERMINAR LA EJECUCIÓN DEL ==> NEXT:()=> {}
    // });
    // if (
    //   this.loginRequest.username == null || this.loginRequest.username == ""
    //   || this.loginRequest.password == null || this.loginRequest.password == ""
    // ) {
    //   alert("usuario y contraseña son requeridos");
    //   return;
    // }

    this.loginRequest = this.frmLogin.getRawValue();
    this._authService.login(this.loginRequest).subscribe({
      next: (data: LoginResponse) => {
        alert(data.mensaje);
        if (data.success) {
          sessionStorage.setItem("token", data.token)
          setTimeout(() => {
            this._router.navigate(['template']);
          }, 200);
        }
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {

      },
    });

  }


}
