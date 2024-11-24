import { Component, ViewEncapsulation } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-app-alert',
  templateUrl: './app-alert.component.html',
  styleUrl: './app-alert.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppAlertComponent {
  constructor(public alertService: AlertService) {}

  onClose(value: any): void {
    this.alertService.onClose(value);
  }
}
