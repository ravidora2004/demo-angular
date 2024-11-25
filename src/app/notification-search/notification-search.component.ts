import { Component } from '@angular/core';

@Component({
  selector: 'notification-search',
  templateUrl: './notification-search.component.html',
  styleUrl: './notification-search.component.css'
})
export class NotificationSearchComponent {
    notifficationDetails = {
      caseId:'5507744.2',
      miniTeam:'310AB',
      name:'Last Name, First Name',
      dob:'12/05/1965',
      gender:'m',
      ssn:'XXXX-XX-9999'
    }
}
