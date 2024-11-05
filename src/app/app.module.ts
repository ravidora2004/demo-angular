import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideAnimations } from '@angular/platform-browser/animations';
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityIcons, trashIcon, pencilIcon, refreshIcon, floppyIcon, copyIcon} from '@cds/core/icon';
import { loadCoreIconSet } from '@cds/core/icon';
import { QtcHeaderComponent } from './qtc-header/qtc-header.component';
import { SearchComponent } from './search/search.component';
import { QtcFooterComponent } from './qtc-footer/qtc-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AddeventComponent } from './addevent/addevent.component';
import { WeatherEventGridComponent } from './weather-event-grid/weather-event-grid.component';

loadCoreIconSet();

@NgModule({
  declarations: [
    AppComponent,
    QtcHeaderComponent,
    SearchComponent,
    QtcFooterComponent,
    AddeventComponent,
    WeatherEventGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    ClarityIcons.addIcons(trashIcon, pencilIcon, refreshIcon, floppyIcon, copyIcon);
  }
 }
