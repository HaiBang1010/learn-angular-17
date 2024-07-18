import { Component, OnInit } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildrenComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {
  userName = 'Maria';
  isChildDestroyed = false;
  updateUser() {
    this.userName = 'Chris';
  }

  ngOnInit() {
    console.log('ngOnInit from the parent component');
  }

  destroy() {
    this.isChildDestroyed = true;
  }
}
