import { Component } from '@angular/core';
import { RegimenLibraryComponent } from "./regimen-library/regimen-library.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RegimenLibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
