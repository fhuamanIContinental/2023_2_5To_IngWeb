import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TemplateComponent } from './pages/template/template.component';
import { ProductoListComponent } from './pages/mantenimiento/producto/producto-list/producto-list.component';
import { CategoriaListComponent } from './pages/mantenimiento/categoria/categoria-list/categoria-list.component';
import { AuthGuard } from './guards/auth.guard';
import { TipoDocumentoListaComponent } from './pages/mantenimiento/tipo-documento/tipo-documento-lista/tipo-documento-lista.component';

const routes: Routes = [

  {
    path: '', component: LoginComponent
  },
  {
    path: 'template', component: TemplateComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'mantenimiento', children: [
          {
            path: 'producto', component: ProductoListComponent
          },
          {
            path: 'categoria', component: CategoriaListComponent
          },
          {
            path: 'tipo-documento', component: TipoDocumentoListaComponent
          }
        ]
      },
      // {
      //   path:'atencion-cliente'
      // },
      // {
      //   path:'ventas'
      // }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
