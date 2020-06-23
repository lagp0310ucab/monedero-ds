import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
	
  constructor() {	}

	// https://www.intersysconsulting.com/blog/angular-components/
	private lista = new Subject<Array<any>>();
	
	/**
	 * Actualizar la lista y enviar actualizaciones a los suscriptores de lista.
	 */
	updateLista(nuevaLista: Array<any>) {
		this.lista.next(nuevaLista);
	}
	
	/**
	 * Obtener la lista. Esto lo utilizan los suscriptores de lista.
	 */
	getLista(): Observable<Array<any>> {
		return this.lista.asObservable();
	}
	
	/**
	 * Obtener todas las operaciones.
	 */
	public obtenerOperaciones() {
		console.log('obtener todas');
	}
	
	/**
	 * Obtener una operación específica.
	 */
	public obtenerOperacion(id: number) {
		console.log('obtener id');
	}
	
	/**
	 * Crear una operación.
	 */
	public crearOperacion() {
		console.log('crear');
	}
	
	/**
	 * Obtener una operación específica.
	 */
	public modificarOperacion(id: number) {
		console.log('modificar id');
	}
	
	/**
	 * Eliminar una operación específica.
	 */
	public eliminarOperacion(id: number) {
		console.log('eliminar id');
	}
	
	/**
	 * Filtrar las operaciones según requerimientos del usuario.
	 */
  public filtrarOperaciones(operaciones) {
		if (operaciones === 'todas') {
			this.updateLista([
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
		else if (operaciones=="aprobadas") {
			this.updateLista([
				{
					id: "11",
					monto: "62156849",
					fecha: "07/01/21"
				},
				{
					id: "12",
					monto: "62156849",
					fecha: "07/01/21"
				 
				}
			]);
    }
    else if (operaciones=="canceladas") {
      this.updateLista([
        {
          id: "21",
          monto: "62156849",
          fecha: "07/01/21"
        },
        {
          id: "22",
          monto: "62156849",
          fecha: "07/01/21"
         
        }
      ]);
    }
    else if (operaciones=="enProceso") {
			this.updateLista([
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
				 
				}      
			]);
    }
    else if (operaciones=="retenidas") {
      this.updateLista([
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
	}
	
}
