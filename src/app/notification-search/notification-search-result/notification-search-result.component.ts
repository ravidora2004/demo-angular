import { Component } from '@angular/core';

interface weatherEventType{
  weatherEvent: string,
  weatherType: string,
  description: string,
  location: string,
  country: string,
  state: string,
  eventStartDate: string,
  eventEndDate: string,
  status: string,
}

@Component({
  selector: 'notification-search-result',
  templateUrl: './notification-search-result.component.html',
  styleUrl: './notification-search-result.component.css'
})
export class NotificationSearchResultComponent {
  selected:Array<weatherEventType>=[];

  weatherEvents:Array<weatherEventType>=[
    {
        "weatherEvent": "Hurricane Delta",
        "weatherType": "Hurricane",
        "description": "A powerful hurricane causing severe flooding and strong winds",
        "location": "Louisiana",
        "country": "United States",
        "state": "Louisiana",
        "eventStartDate": "2020-10-06",
        "eventEndDate": "2020-10-10",
        "status": "active"
    },
    {
        "weatherEvent": "Winter Storm Jonas",
        "weatherType": "Blizzard",
        "description": "A severe winter storm bringing heavy snow and freezing temperatures",
        "location": "Northeast United States",
        "country": "United States",
        "state": "Multiple States",
        "eventStartDate": "2016-01-22",
        "eventEndDate": "2016-01-25",
        "status": "inactive"
    },
    {
        "weatherEvent": "Heatwave 2021",
        "weatherType": "Heatwave",
        "description": "A prolonged period of extreme heat and humidity",
        "location": "Pacific Northwest",
        "country": "United States",
        "state": "Oregon, Washington, British Columbia",
        "eventStartDate": "2021-06-25",
        "eventEndDate": "2021-07-01",
        "status": "inactive"
    },
    {
        "weatherEvent": "Wildfire Season 2020",
        "weatherType": "Wildfire",
        "description": "Numerous wildfires burning across the Western United States",
        "location": "Western United States",
        "country": "United States",
        "state": "California, Oregon, Washington",
        "eventStartDate": "2020-08-15",
        "eventEndDate": "2020-09-15",
        "status": "inactive"
    },
    {
        "weatherEvent": "Tornado Outbreak 2011",
        "weatherType": "Tornado",
        "description": "A series of tornadoes that struck the Southern United States",
        "location": "Southern United States",
        "country": "United States",
        "state": "Alabama, Mississippi, Tennessee",
        "eventStartDate": "2011-04-25",
        "eventEndDate": "2011-04-28",
        "status": "inactive"
    }
]
}
