import { Component,ViewChild } from '@angular/core';
import { Country,WeatherEvent,WeatherType } from '../dtos/dtos';
import { CommonService } from '../services/common.service';
import { AddeventComponent } from '../addevent/addevent.component';
import { Result } from '../models/commonmodels';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @ViewChild(AddeventComponent) addevent!:AddeventComponent;
  states:Array<any>=[{name:'Alaska', value:'al'}]
  weatherEvents = [{'startDate': 1728561703122, 
    WeatherAlertID:'007',
    'endDate': 1733952000000,
     'weatherEvent': 'Winter Storm Nancy', 
      'weatherType': 'Severe winter', 'description': 'Snow', 'location': 'West to East', 'country': 'USA'}]
  //weatherEvents: WeatherEvent[]=[];
  countries : Country[]=[];
  weatherTypes : WeatherType[]=[];
  weathersearch:any = {
    frmSrchCountry:'',
    frmSrchWeatherType:'',
    frmSrchStDt:'',
    frmSrchEndDt:'',
    frmSrchLocation:'',
  };
  weatherResult ={} as Result;
  filterEnabled :boolean=true;

  gridData:any = null;
 constructor(private commonService:CommonService){
  this.filterEnabled=true;
 }

 editEntry(entry:any){
  this.commonService.getWeatherEventById(entry.WeatherAlertID) // check what key points to the ID in the event object
  .subscribe({
    next : (response:any) =>{
      this.gridData = response; // check what you get in response and set it to this.gridData
      this.openModal('edit')
    },
    error:(error:any) => {
      // Show error message on the toaster
    }
  })
  
 }

 handleFormClose(event:any){
  this.gridData = event;
 }

 reset(_form:any):void{
  _form.reset();
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
onSubmit(_form:any):void{
  const formValue = _form.value; // use this value to pass to the  service and get data
  this.commonService.getallWeatherEvents().subscribe((result:Result)=>{
    this.weatherResult  = result;
    this.weatherEvents = result.data;
    this.filterEnabled = true;
  });
}

openModal(mode:string):void{
  if(mode === 'add') this.gridData = null;
  this.addevent.openModal(mode);
}
}