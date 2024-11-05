import { Component,ViewChild } from '@angular/core';
import { Country,WeatherEvent,WeatherType } from '../dtos/dtos';
import { CommonService } from '../services/common.service';
import { AddeventComponent } from '../addevent/addevent.component';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Result } from '../models/commonmodels';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @ViewChild(AddeventComponent) addevent!:AddeventComponent;
  weatherEvents = [{'startDate': 1728561703122, 
    'endDate': 1733952000000,
     'weatherEvent': 'Winter Storm Nancy', 
      'weatherType': 'Severe winter', 'description': 'Snow', 'location': 'West to East', 'country': 'USA'}]
  //weatherEvents: WeatherEvent[]=[];
  countries : Country[]=[];
  weatherTypes : WeatherType[]=[];
  weathersearchform! :FormGroup;
  weatherResult ={} as Result;
  filterEnabled :boolean=true;
 constructor(private frmbuilder :FormBuilder,private commonService:CommonService){
  this.filterEnabled=true;
  this.weathersearchform = this.frmbuilder.group({
    frmSrchCountry:['',[]],
    frmSrchWeatherType:['',[]],
    frmSrchStDt:['',[]],
    frmSrchEndDt:['',[]],
    frmSrchLocation:['',[]],
  });
 }
 reset():void{
  this.weathersearchform.reset();
  this.weatherEvents=[];
  this.weatherResult={} as Result;
 }
 ngOnInit(){
  
  
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
onSubmit():void{
  this.commonService.getallWeatherEvents().subscribe((result:Result)=>{
    this.weatherResult  = result;
    this.weatherEvents = result.data;
    this.filterEnabled = true;
  });
}

openModal():void{
  this.addevent.openModal();
}
}
