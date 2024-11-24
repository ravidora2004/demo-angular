import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

export enum IAlertType {
  INFO = "info",
  WARNING = "warning",
  SUCCESS = "success",
  DANGER = "danger"
}

export interface IAlertConfig {
  clrAlertType?: IAlertType,
  message: string;
  clrAlertAppLevel?: boolean;
  clrAlertClosable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  shouldShowAlert: boolean = false;
  alertConfig: IAlertConfig = {
    clrAlertType: IAlertType.INFO,
    message: "",
    clrAlertAppLevel: false,
    clrAlertClosable: true
  };
  close = new Subject<any>();

  constructor() { }

  show(config: IAlertConfig): AlertService {
    this.shouldShowAlert = true;
    this.alertConfig = {...this.alertConfig, ...config};
    return this;
  }

  hide(): AlertService {
    this.shouldShowAlert = false;
    return this;
  }

  toggle(): AlertService {
    this.shouldShowAlert = !this.shouldShowAlert;
    return this;
  }

  onClose(value: any): any {
   this.hide();
   this.close.next(value);
  }

  onClose$(): any {
    return this.close;
  }
}