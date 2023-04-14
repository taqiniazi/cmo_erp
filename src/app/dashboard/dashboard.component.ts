import { Component, OnInit  } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  maritalStatus:any = ['Single','Married','Divorced'];
  relationship:any = ['Father','Mother','Son','Daughter','Uncle'];
  constructor() {}
  ngOnInit(){   
  }  
}
