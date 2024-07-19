import { MissionControlComponent } from './components/missioncontrol.component';
import { CountdownLocalVarParentComponent } from './components/countdown-parent.component';
import { VoteTakerComponent } from './components/votetaker.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VersionParentComponent } from './components/version-parent.component';
import { ParentComponent } from './components/parent/parent.component';
import { TowWayBindingComponent } from './components/tow-way-binding/tow-way-binding.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParentComponent,
    VersionParentComponent,
    VoteTakerComponent,
    CountdownLocalVarParentComponent,
    MissionControlComponent,
    TowWayBindingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular17-test';
}
