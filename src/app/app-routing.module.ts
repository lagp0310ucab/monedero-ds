import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'saldo',
    loadChildren: () => import('./saldo/saldo.module').then( m => m.SaldoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },  {
    path: 'operaciones',
    loadChildren: () => import('./operaciones/operaciones.module').then( m => m.OperacionesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'recuperar-datos',
    loadChildren: () => import('./recuperar-datos/recuperar-datos.module').then( m => m.RecuperarDatosPageModule)
  },
  {
    path: 'recuperacion-datos-exitosa',
    loadChildren: () => import('./recuperacion-datos-exitosa/recuperacion-datos-exitosa.module').then( m => m.RecuperacionDatosExitosaPageModule)
  },
  {
    path: 'pago-exitoso',
    loadChildren: () => import('./pago-exitoso/pago-exitoso.module').then( m => m.PagoExitosoPageModule)
  },
  {
    path: 'pago-fallido',
    loadChildren: () => import('./pago-fallido/pago-fallido.module').then( m => m.PagoFallidoPageModule)
  },
  {
    path: 'cambiar-nombre-usuario',
    loadChildren: () => import('./cambiar-nombre-usuario/cambiar-nombre-usuario.module').then( m => m.CambiarNombreUsuarioPageModule)
  },
  {
    path: 'cambiar-password',
    loadChildren: () => import('./cambiar-password/cambiar-password.module').then( m => m.CambiarPasswordPageModule)
  },
  {
    path: 'cambiar-correo-electronico',
    loadChildren: () => import('./cambiar-correo-electronico/cambiar-correo-electronico.module').then( m => m.CambiarCorreoElectronicoPageModule)
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./preguntas-frecuentes/preguntas-frecuentes.module').then( m => m.PreguntasFrecuentesPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
