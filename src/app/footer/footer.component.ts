import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  maritalStatus:any = ['Single','Married','Divorced'];
  relationship:any = ['Father','Mother','Son','Daughter','Uncle'];
  constructor() {}
  ngOnInit(){   
  } 
}
