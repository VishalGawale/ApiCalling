import { Component } from '@angular/core';
import { GlobalServiceService } from './global-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiCalling';
  data: any;
  response: any = [];
  daisoft: any = [];
  constructor(private global: GlobalServiceService) { }

  ngOnInit() {
    this.callapi();

  }
  async callapi() {
    let obj = {
      P_BRID: "PD01",
      P_FLG: "O",
      P_INV_DATE: null,
      P_INV_NO: null
    }
    let result = await this.global.postData(obj);
    this.response = result.Accuesoft;
    this.daisoft = result.Diasoft;
    
  }
}

