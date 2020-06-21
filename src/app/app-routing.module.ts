import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
  },
  {
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
    path: 'recargarsaldo',
    loadChildren: () => import('./recargarsaldo/recargarsaldo.module').then( m => m.RecargarsaldoPageModule)
  },
  {
    path: 'recargarsaldo',
    loadChildren: () => import('./recargarsaldo/recargarsaldo.module').then( m => m.RecargarsaldoPageModule)
  },
  {
    path: 'recargartarjeta',
    loadChildren: () => import('./recargartarjeta/recargartarjeta.module').then( m => m.RecargartarjetaPageModule)
  },
  {
    path: 'formulario-recargar-tarjeta-saldo',
    loadChildren: () => import('./formulario-recargar-tarjeta-saldo/formulario-recargar-tarjeta-saldo.module').then( m => m.FormularioRecargarTarjetaSaldoPageModule)
  },
  {
    path: 'recarga-tarjeta-saldo-exitosa',
    loadChildren: () => import('./recarga-tarjeta-saldo-exitosa/recarga-tarjeta-saldo-exitosa.module').then( m => m.RecargaTarjetaSaldoExitosaPageModule)
  },
  {
    path: 'recargar-cuenta-bancaria',
    loadChildren: () => import('./recargar-cuenta-bancaria/recargar-cuenta-bancaria.module').then( m => m.RecargarCuentaBancariaPageModule)
  },
  {
    path: 'formulario-recargar-cuenta-saldo',
    loadChildren: () => import('./formulario-recargar-cuenta-saldo/formulario-recargar-cuenta-saldo.module').then( m => m.FormularioRecargarCuentaSaldoPageModule)
  },
  {
    path: 'recarga-cuenta-saldo-exitosa',
    loadChildren: () => import('./recarga-cuenta-saldo-exitosa/recarga-cuenta-saldo-exitosa.module').then( m => m.RecargaCuentaSaldoExitosaPageModule)
  },
  {
    path: 'recarga-cuenta-saldo-fallida',
    loadChildren: () => import('./recarga-cuenta-saldo-fallida/recarga-cuenta-saldo-fallida.module').then( m => m.RecargaCuentaSaldoFallidaPageModule)
  },
  {
    path: 'recarga-tarjeta-saldo-fallida',
    loadChildren: () => import('./recarga-tarjeta-saldo-fallida/recarga-tarjeta-saldo-fallida.module').then( m => m.RecargaTarjetaSaldoFallidaPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
