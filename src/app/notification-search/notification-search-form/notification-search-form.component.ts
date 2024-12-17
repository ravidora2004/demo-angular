import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SearchForm } from '../../models/notification';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'notification-search-form',
  templateUrl: './notification-search-form.component.html',
  styleUrl: './notification-search-form.component.css'
})
export class NotificationSearchFormComponent {
  @ViewChild('notificationSearchform') form!: NgForm;
  @Output() onFormUpdate = new EventEmitter()
  @Input() set buttonStatus(val:boolean){
    this.enableSave = val
  } 
  enableSave:boolean = false;
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
    console.log('Log in search form', r)
  }

  // Trigger the close event, it can be redirect also
  closeForm(){
    console.log("close event triggered")
  }

  ngAfterViewInit() {
    // Listen for changes in the entire form
    this.form.valueChanges?.subscribe((value) => {
      Object.keys(value).forEach((formItem:string) =>{
        if(value[formItem] !==''){
          this.enableSave = true
        }
      })
    });
  }
}
