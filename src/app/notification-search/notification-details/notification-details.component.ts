import { Component, Input } from '@angular/core';

interface eventType{
  caseId: string,
  miniTeam: string,
  name: string,
  dob: string,
  gender: string,
  ssn: string
}
@Component({
  selector: 'notification-details',
  templateUrl: './notification-details.component.html',
  styleUrl: './notification-details.component.css'
})
export class NotificationDetailsComponent {
  @Input() notification:eventType | null = null;

}

