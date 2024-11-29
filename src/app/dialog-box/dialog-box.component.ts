import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegimenServiceService } from '../../Services/regimen-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers : [RegimenServiceService],
})
export class DialogBoxComponent implements OnInit {
  regimenForm!: FormGroup;
  RegimenAddedMessageStatus : string = '';
  regimenTags: string[] = ['TCH', 'FOLFOX'];

  constructor(private regimenService : RegimenServiceService) {}

  ngOnInit(): void {
    this.regimenForm = new FormGroup({
      regimenName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      diseaseCategory: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl(''),
      emeticRisk: new FormControl('Minimal'),
      neutropenicRisk: new FormControl('Low'),
      indication: new FormControl('Adjuvant'),
      cost: new FormControl(null, [Validators.pattern(/^\d+$/)]),
      isAvailable: new FormControl(true),
    });
  }

  onSubmit(): void {
    if (this.regimenForm.valid) {
      this.regimenService.OnAddRegimen(this.regimenForm.value).subscribe(
        (data : string) => {
          this.RegimenAddedMessageStatus = data;
          console.log(this.RegimenAddedMessageStatus);
        }
      );
    } else {
      console.log('Form is invalid!');
    }
  }

  onCancel(): void {
    this.regimenForm.reset({
      regimenName: '',
      diseaseCategory: '',
      description: '',
      emeticRisk: 'Minimal',
      neutropenicRisk: 'Low',
      indication: 'Adjuvant',
      cost: null,
      isAvailable: true,
    });
  }
}
