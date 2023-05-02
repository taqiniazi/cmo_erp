import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HRISDashboard } from './cmo_hris/dashboard/dashboard.component';
import { VehicleDashboard } from './cmo_vehicle/dashboard/dashboard.component';
import { SearchEmployeeIInformationComponent } from './cmo_hris/search-employee-i-information/search-employee-i-information.component';
import { AddEmployeeComponent } from './cmo_hris/add-employee/add-employee.component';
import { FooterComponent } from './footer/footer.component';
import { EmpTransferStatusComponent } from './cmo_hris/emp-transfer-status/emp-transfer-status.component';
import { HajjBallotingComponent } from './cmo_hris/hajj-balloting/hajj-balloting.component';
import { ProductCategoryComponent } from './cmo_hris/product-category/product-category.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AveragePetrolUsageChartComponent } from './cmo_vehicle/dashboard/charts/average-petrol-usage-chart/average-petrol-usage-chart.component';
import { RunningVehiclesChartComponent } from './cmo_vehicle//dashboard/charts/running-vehicles-chart/running-vehicles-chart.component';
import { TotalVehiclesChartComponent } from './cmo_vehicle//dashboard/charts/total-vehicles-chart/total-vehicles-chart.component';
import { VehicleHealthChartComponent } from './cmo_vehicle//dashboard/charts/vehicle-health-chart/vehicle-health-chart.component';
import { VehiclePerformanceChartComponent } from './cmo_vehicle//dashboard/charts/vehicle-performance-chart/vehicle-performance-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { SearchOfPolAndMroComponent } from './cmo_vehicle/search-of-pol-and-mro/search-of-pol-and-mro.component';
import { InformationOfProductCategoryComponent } from './cmo_vehicle/information-of-product-category/information-of-product-category.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HRISDashboard,
    VehicleDashboard,
    SearchEmployeeIInformationComponent,
    AddEmployeeComponent,
    FooterComponent,
    EmpTransferStatusComponent,
    HajjBallotingComponent,
    ProductCategoryComponent,
    AveragePetrolUsageChartComponent,
    RunningVehiclesChartComponent,
    TotalVehiclesChartComponent,
    VehicleHealthChartComponent,
    VehiclePerformanceChartComponent,
    CanvasJSChart,
    SearchOfPolAndMroComponent,
    InformationOfProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
