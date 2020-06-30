import { Component, OnInit } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BooleanValueAccessor } from '@ionic/angular';

import { SaldoService } from '../services/saldo.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-recargartarjeta',
  templateUrl: './recargartarjeta.page.html',
  styleUrls: ['./recargartarjeta.page.scss'],
})
export class RecargartarjetaPage implements OnInit {

  constructor(private saldoService: SaldoService, private loginService: LoginService) { }

	private tarjetas: any;
	
  ngOnInit() {
		this.obtenerTarjetas(this.loginService.getToken(), this.loginService.getIdUsuario(), this.loginService.getAuthHeader());
	}
	
	/**
	 * Obtener las tarjetas del usuario.
	 */
	public async obtenerTarjetas(token: string, idUsuario: string, headers: any) {
		return await this.saldoService.obtenerTarjetas(token, idUsuario, headers).subscribe((data: any) => {
			this.tarjetas = data
		});
	}

}
