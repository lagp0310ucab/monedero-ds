import { Component, OnInit } from '@angular/core';

import { PagosService } from '../services/pagos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {
	
	private cuentaDebitar: string;
	private emailDestinatario: string;
	private monto: number;
	private subscriptionCuenta;
	private subscriptionEmailDestinatario;
	private subscriptionMonto;
	
  constructor(private pagosService: PagosService) {
		this.subscriptionCuenta = this.pagosService.getCuentaDebitar().subscribe(cuentaDebitar => this.cuentaDebitar = cuentaDebitar);
		this.subscriptionEmailDestinatario = this.pagosService.getEmailDestinatario().subscribe(emailDestinatario => this.emailDestinatario = emailDestinatario);
		this.subscriptionMonto = this.pagosService.getMonto().subscribe(monto => this.monto = monto);
	}

  ngOnInit() {
  }
	
	ngOnDestroy() {
		this.subscriptionCuenta.unsubscribe();
		this.subscriptionEmailDestinatario.unsubscribe();
		this.subscriptionMonto.unsubscribe();
	}

}
