import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {Route, RouterModule, Routes} from '@angular/router';
import { RawDataComponent } from './raw-data/raw-data.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { BatchComponent } from './batch/batch.component';
import { DatadetailComponent } from './datadetail/datadetail.component';
import { Dataservices } from './services/data.services';
import { StartBatchProcessingServices } from './services/batch.services';
import { DetailServices } from './services/detail.services';

import {ChartModule, LineSeriesService, CategoryService, LegendService,
DataLabelService, TooltipService, DateTimeService, DateTimeCategoryService, StripLineService} from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { ChartServices } from './services/chart.services';




/** to use routing, a constant type Route must to be define a */
/** two variables are required : the path and it's related component */
/** then add this line in the import : RouterModule.forRoot(appRoutes) */
/** then add ths in the main app.component.html by removing the calling of the view tamplete: <router-outlet></router-outlet>
 */
/** use id of a family to create a route to it's content */
/** add canActivate:[AuthGaurdService] to use gaurd for this component */
const appRoutes: Routes = [
  {path : 'batch', component : BatchComponent},
  {path : 'data', component : RawDataComponent},
  {path : 'table', component : TableComponent},
  {path : 'chart', component : ChartComponent},
  {path : 'datadetail', component : DatadetailComponent},
  {path : '', redirectTo : '/data', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    RawDataComponent,
    TableComponent,
    ChartComponent,
    BatchComponent,
    DatadetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatProgressBarModule,
    ChartModule,
    
  ],
  providers: [
    Dataservices,
    StartBatchProcessingServices,
    DetailServices,
    ChartServices,
    LineSeriesService,
    CategoryService,
    LegendService,
    DataLabelService,
    TooltipService,
    Browser,
    DateTimeService,
    DateTimeCategoryService, StripLineService
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
