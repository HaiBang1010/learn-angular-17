import { Component } from '@angular/core';
import { MissionService } from './mission.service';
import { AstronautComponent } from './astronaut.component';
@Component({
  selector: 'app-mission-control',
  standalone: true,
  imports: [AstronautComponent],
  template: `
    <h2>Mission Control</h2>
    <button type="button" (click)="announce()">Announce mission</button>

    @for(astronaut of astronauts; track astronaut.length){
    <app-astronaut [astronaut]="astronaut"> </app-astronaut>
    }

    <h3>History</h3>
    <ul>
      @for( event of history; track event.length){
      <li>{{ event }}</li>
      }
    </ul>
  `,
  providers: [MissionService],
})
export class MissionControlComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe((astronaut) => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
