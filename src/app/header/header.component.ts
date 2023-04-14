import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectSystem: any = [
    {
      system: 'HRIS',
      url: '',
    },
    {
      system: 'eDirectives',
      url: '',
    },
    {
      system: 'eSummaries',
      url: '',
    },
    {
      system: 'Protocol Wing',
      url: '',
    },
    {
      system: 'IM System',
      url: '',
    },
    {
      system: 'Medical Claim System',
      url: '',
    },
    {
      system: 'Motor Transport Information System',
      url: '',
    },
    {
      system: 'Comptroller Inventory System',
      url: '',
    },
    {
      system: 'Receipt & Dispatch System ',
      url: '',
    },
    {
      system: 'Technical Support System',
      url: '',
    },
    {
      system: 'Complaints Management System',
      url: '',
    },
    {
      system: 'Technical Support System',
      url: '',
    },
    {
      system: 'PSO Contacts',
      url: '',
    },
    {
      system: 'PSCM Task Dashboard ',
      url: '',
    },
    {
      system: 'Development Profile / Candidate Profile ',
      url: '',
    },
    {
      system: 'Grant Web Application (DG Health) ',
      url: '',
    },
    {
      system: 'Accounts Management System  ',
      url: '',
    },
    {
      system: 'Visitor Management System ',
      url: '',
    },
  ];

  selected_system = '';
  
  onChange(value: any) {
    this.selected_system = value.target.value;
    console.log('first', this.selected_system);
    if(this.selected_system === 'HRIS') {
      this.router.navigate(['add_employee']);
    }
    if(this.selected_system === 'eDirectives') {
      this.router.navigate(['emp_transfer_status']);
    }
  }

  constructor(private router: Router) {}
}
