import { Component, EventEmitter, Input, Output } from '@angular/core';
import { weatherEventType } from '../../models/notification';

@Component({
  selector: 'notification-search-result',
  templateUrl: './notification-search-result.component.html',
  styleUrl: './notification-search-result.component.css'
})
export class NotificationSearchResultComponent {
  selected:Array<weatherEventType>=[];
  weatherEventsList:weatherEventType[] | null = null;
  @Output() onSelectChange = new EventEmitter();
  @Input() set weatherEvents(_events:weatherEventType[] | null){
    if(_events?.length && !this.weatherEventsList?.length){
      this.weatherEventsList = _events;
      const selectedEvents = _events.filter((eventItem:weatherEventType) => eventItem.status.toLowerCase() === 'active');
      if(selectedEvents.length){
        this.selected = selectedEvents
      }
    }
  };
  
  tableHeader:Array<string> = ['Weather Event','Weather Type','Description','Location','Country','State','Event Start Date','Event End Date','Status'];
  /**
   *  Emit the value when a change in selection is happening
   * 
   */
  handleRowChange(){
    this.onSelectChange.emit(this.selected)
  }

}
