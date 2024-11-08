import { Component, OnInit } from '@angular/core';
import { DynamicFormConfig } from './form-builder/form-models/form.types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient){}
  title = 'Weather Notification App';
  loaded: boolean =false;
  formConfig?: DynamicFormConfig = undefined;
  vm :any ={
    address1: '1500 San Dimas',
    city: 'San Dimas',
    zip : 17650
  }

  settings :any ={    
    lable: 'floating'
  }

  onFormSubmit(formData: any): void {
    console.log('Form submitted:', formData);
  }

  loadFormConfig() {
    this.http.get<DynamicFormConfig>('assets/form.json')
      .subscribe({
        next: (config) => {
          this.formConfig = config;
          this.loaded= true;
        },
        error: (error) => {
          console.error('Error loading form configuration:', error);
        }
      });
  }

  ngOnInit() {
    this.loadFormConfig();
  }

}
