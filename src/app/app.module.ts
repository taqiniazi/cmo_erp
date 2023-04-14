import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchEmployeeIInformationComponent } from './search-employee-i-information/search-employee-i-information.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FooterComponent } from './footer/footer.component';
import { EmpTransferStatusComponent } from './emp-transfer-status/emp-transfer-status.component';
import { HajjBallotingComponent } from './hajj-balloting/hajj-balloting.component';
import { InformationOfReceiptOfIssuedPetrolComponent } from './information-of-receipt-of-issued-petrol/information-of-receipt-of-issued-petrol.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    SearchEmployeeIInformationComponent,
    AddEmployeeComponent,
    FooterComponent,
    EmpTransferStatusComponent,
    HajjBallotingComponent,
    InformationOfReceiptOfIssuedPetrolComponent,
    ProductCategoryComponent,
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
