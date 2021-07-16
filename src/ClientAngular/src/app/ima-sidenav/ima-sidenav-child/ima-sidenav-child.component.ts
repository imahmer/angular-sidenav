import { Component, OnInit, Input } from '@angular/core';
import { SidenavModel } from '../Sidenav.model';

@Component({
  selector: 'ima-sidenav-child',
  templateUrl: './ima-sidenav-child.component.html'
})
export class ImaSidenavChildComponent implements OnInit {
  data: SidenavModel[];
  @Input() sharedData: SidenavModel[];
  toggle: any = {};
  constructor() { }

  ngOnInit(): void {
    this.data = this.sharedData;
  }

}
