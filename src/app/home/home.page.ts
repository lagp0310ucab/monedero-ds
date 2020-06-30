import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private loginService: LoginService) { }

	private token: string;
	
  ngOnInit() {
		this.token = this.loginService.getToken();
  }

}
