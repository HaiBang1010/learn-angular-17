import { Component } from '@angular/core';
import { SizerComponent } from "./sizer.component";

import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-tow-way-binding',
  standalone: true,
  imports: [SizerComponent, FormsModule],
  templateUrl: './tow-way-binding.component.html',
  styleUrl: './tow-way-binding.component.css'
})
export class TowWayBindingComponent {
  fontSizePx: 16px;
}
