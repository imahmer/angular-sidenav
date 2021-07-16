import { Component, OnInit, Input } from '@angular/core';
import { SidenavModel } from './Sidenav.model';

@Component({
  selector: 'ima-sidenav',
  templateUrl: './ima-sidenav.component.html',
  styleUrls: ['./ima-sidenav.component.scss']
})
export class ImaSidenavComponent implements OnInit {
  toggle: any = {};
  data: SidenavModel[];

  @Input() sharedData: SidenavModel[];

  constructor() {}

  ngOnInit(): void {
    this.data = this.sharedData;
  }

}
