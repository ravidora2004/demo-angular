import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchForm } from '../../models/notification';

@Component({
  selector: 'notification-search-form',
  templateUrl: './notification-search-form.component.html',
  styleUrl: './notification-search-form.component.css'
})
export class NotificationSearchFormComponent {
  @Output() onFormUpdate = new EventEmitter()
  @Input() enableSave:boolean = false;
  notificationSearch:SearchForm={
    startDate:'',
    endDate:'',
    location:''
  }

  // Handle form submit
  onSubmit(_form:any){
    if(_form.valid){
      this.onFormUpdate.emit({form: _form.value, type:'save'})
    }
  }
  
  // Save search form 
  onSearch(_form:any){
    // Call the api to save the content
    if(_form.valid){
      this.onFormUpdate.emit({form: _form.value, type:'search'})
    }
  }

  log(r:any){
    console.log('asdfas', r)
  }

  // Trigger the close event, it can be redirect also
  closeForm(){
    console.log("close event triggered")
  }
}
