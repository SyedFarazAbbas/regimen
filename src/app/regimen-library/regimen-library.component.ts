import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Regimen} from '../../Classes/Regimen';
import { RegimenServiceService } from '../../Services/regimen-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CdkTableBasicExample } from "../cdk-table-basic-example/cdk-table-basic-example.component";

@Component({
  selector: 'app-regimen-library',
  standalone: true,
  imports: [CommonModule, FormsModule, CdkAccordionModule, CdkTableBasicExample,CdkTableBasicExample],
  templateUrl: './regimen-library.component.html',
  styleUrls: ['./regimen-library.component.css']
})
export class RegimenLibraryComponent implements OnInit{

  expandedIndex = 0;
  title = 'regimen';
  regimens : Regimen[] = []
  dic: { [key: string]: number } = {};
  searchText : string = '';

  
  constructor(private regimenService : RegimenServiceService, private dialog :MatDialog){}


  ngOnInit() {
    this.OnLoadRegimens();
  }
  

  OnLoadRegimens(): void {
    this.regimenService.GetAllRegimens().subscribe(
      (data: Regimen[]) => {
        this.regimens = data;
        for (const val of this.regimens) {
          if (val.diseaseCategory in this.dic)
          {
            this.dic[val.diseaseCategory]++;
          } 
          else 
          {
            this.dic[val.diseaseCategory] = 1;
          }
      }    
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
     
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
}

}