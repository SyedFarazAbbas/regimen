import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PeriodicElement {
  Regimen: string;
  Owner: string;
  Action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Regimen: 'Bendamustine + Obinutuzumab followed by Obinutuzumab maintenance.', Owner: 'NCCN', Action: '' },
  { Regimen: 'Cisplatin/Gemzar.', Owner: 'Practice', Action: '' },
  { Regimen: 'Cisplatin + Fluorouracil + Radiation Therapy.', Owner: 'Dr. Irfan Toor', Action: '' },
  { Regimen: 'mFOLFOX6 (Fluorouracil continuous infusion/Leucovorin/OXALiplatin).', Owner: 'NCCN', Action: '' },
  { Regimen: 'Pembrolizumab (Single-Agent regimen).', Owner: 'Practice', Action: '' },
];

@Component({
  selector: 'cdk-table-basic-example',
  standalone:true,
  styleUrls: ['./cdk-table-basic-example.component.css'],
  templateUrl: './cdk-table-basic-example.component.html',
  imports: [CdkTableModule],
})
export class CdkTableBasicExample {
  displayedColumns: string[] = ['Regimen', 'Owner', 'Action'];
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<PeriodicElement> {
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
