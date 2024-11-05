import { Component,OnInit } from '@angular/core';
import { WeatherEvent,WeatherEventRequest } from '../dtos/dtos';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrl: './addevent.component.css',
})
export class AddeventComponent  implements OnInit {
  weatherTypes : any;
  countries : any;
  input:any;
  weatherEvent={} as WeatherEvent;
  open:boolean=false;
  weatheraddform! :FormGroup;
  request ={} as WeatherEventRequest;
  constructor(private fb :FormBuilder,private commonService:CommonService){
    
  }

ngOnInit(): void {
  this.loadWeatherform();
  this.commonService.getallCountries().subscribe((results:any)=>{
  
    if(results.succeeded){
      this.countries = results.data;
    }
    
  });
  this.commonService.getAllWeatherTypes().subscribe((result:any)=>{
   if(result.succeeded){
    this.weatherTypes = result.data;
   }
    
  });
}
  openModal():void {
    this.open =true;
    //this.loadWeatherform();
  }
   loadWeatherform() {
    this.weatheraddform = this.fb.group({
      frmVaCode:['',[Validators.required]],
      frmWeatherEvent:['',[Validators.required]],
      frmReasons:['',[Validators.required]],
      frmCountry:['',[Validators.required]],
      frmLocation:['',[Validators.required]],
      frmStartDate:['',[Validators.required]],
      frmEndDate:['',[Validators.required]],
      frmDescription:['',[Validators.required]],
      frmOtherDescription:[''],
    });
  
    this.weatheraddform.get('frmReasons')?.valueChanges.subscribe(value =>{
      const otherDescControl = this.weatheraddform.get('frmOtherDescription');
      if(value ==='others'){
        otherDescControl?.setValidators(Validators.required);
      } else{
        otherDescControl?.clearValidators();
      }
      otherDescControl?.updateValueAndValidity();
    });
  }
  closeModal(): void {
    this.open = false;
  }

  onSubmit():void{
    alert("hi");
    if(this.weatheraddform.valid){
      
 alert(this.weatheraddform.value)
 this.open = false;
      //this.commonService.addWeatherEvent();
    }
  }
}
