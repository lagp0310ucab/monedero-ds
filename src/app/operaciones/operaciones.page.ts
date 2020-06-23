import { Component, OnInit } from '@angular/core';

import { OperacionesService } from '../services/operaciones.service';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {

	private operaciones: Array<any>;
	private subscription;
	
  constructor(private operacionesService: OperacionesService) {
		this.subscription = this.operacionesService.getLista().subscribe(lista => this.operaciones = lista);
	}

  ngOnInit() {
		this.operacionesService.updateLista([
			{
				id: "11",
				monto: "62156849",
				fecha: "07/01/21"
			},
			{
				id: "12",
				monto: "62156849",
				fecha: "07/01/21"
			 
			},
			{
				id: "21",
				monto: "62156849",
				fecha: "07/01/21"
			},
			{
				id: "22",
				monto: "62156849",
				fecha: "07/01/21"
			 
			},
			{
				id: "31",
				monto: "62156849",
				fecha: "07/01/21"
			},
			{
				id: "32",
				monto: "62156849",
				fecha: "07/01/21"
			 
			},
			{
				id: "33",
				monto: "62156849",
				fecha: "07/01/21"
			
			},
			{
				id: "34",
				monto: "62156849",
				fecha: "07/01/21"
			 
			},
			{
				id: "41",
				monto: "62156849",
				fecha: "07/01/21"
			},
			{
				id: "42",
				monto: "62156849",
				fecha: "07/01/21"
			 
			}
		]);
  }
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
