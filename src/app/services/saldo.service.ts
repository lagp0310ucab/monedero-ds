import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  constructor(private http: HttpClient) { }
	
	/**
	 * Obtener el saldo del usuario.
	 */
	public getSaldo() {
		return this.http.get('');
	}
	
}
