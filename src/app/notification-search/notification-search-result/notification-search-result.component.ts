import { Component, EventEmitter, Input, Output } from '@angular/core';
import { weatherEventType } from '../../models/notification';

@Component({
  selector: 'notification-search-result',
  templateUrl: './notification-search-result.component.html',
  styleUrl: './notification-search-result.component.css'
})
export class NotificationSearchResultComponent {
  @Output() onSelectChange = new EventEmitter();
  @Input() weatherEvents: Array<weatherEventType> | null=null;
  selected:Array<weatherEventType>=[];
  tableHeader:Array<string> = ['Weather Event','Weather Type','Description','Location','Country','State','Event Start Date','Event End Date','Status'];
  /**
   *  Emit the value when a change in selection is happening
   * 
   */
  handleRowChange(){
    this.onSelectChange.emit(this.selected)
  }
}
