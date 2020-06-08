import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-recuperar-datos',
  templateUrl: './recuperar-datos.page.html',
  styleUrls: ['./recuperar-datos.page.scss'],
})
export class RecuperarDatosPage implements OnInit {
	
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
