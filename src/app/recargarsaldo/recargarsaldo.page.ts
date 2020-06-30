import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-recargarsaldo',
  templateUrl: './recargarsaldo.page.html',
  styleUrls: ['./recargarsaldo.page.scss'],
})
export class RecargarsaldoPage implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
