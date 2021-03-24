import { Component, OnInit } from '@angular/core';
import { StateService } from 'services/state.service';

@Component({
  selector: 'pa-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.app.header.setData(`Error 404: Page not found`);
  }


}
