import { Component } from '@angular/core';

interface searchFormType{
  startDate: string,
  endDate:string,
  location:string
}
@Component({
  selector: 'notification-search-form',
  templateUrl: './notification-search-form.component.html',
  styleUrl: './notification-search-form.component.css'
})
export class NotificationSearchFormComponent {
  
  notificationSearch:searchFormType={
    startDate:'',
    endDate:'',
    location:''
  }

  // Handle form submit
  onSubmit(_form:any){
    console.log(_form.invalid)
  }
  
  // Save search form 
  saveSearchForm(_form:any){
    // Call the api to save the content
    console.log(_form.value)
  }

  // Trigger the close event, it can be redirect also
  closeForm(){
    console.log("close event triggered")
  }
}
