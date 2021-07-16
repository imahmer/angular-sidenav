import { Component } from '@angular/core';
import { SidenavModel } from './ima-sidenav/Sidenav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sidenav';
  sharedData: SidenavModel[] = [
    {
      title: 'Electronic Devices',
      route: '',
      children: [
        {
          title: 'Smart Phones',
          route: '',
          children: [
            {
              title: 'Nokia Mobiles',
              route: '',
              children: []
            },
            {
              title: 'Apple iPhones',
              route: '',
              children: []
            },
            {
              title: 'Xiaomi Mi Mobiles',
              route: '',
              children: []
            },
          ]
        },
      ]
    },
    {
      title: 'Electronic Accessories',
      route: '',
      children: [
        {
          title: 'Smart Phones',
          route: '',
          children: [
            {
              title: 'Nokia Mobiles',
              route: '',
              children: []
            },
            {
              title: 'Apple iPhones',
              route: '',
              children: []
            },
            {
              title: 'Xiaomi Mi Mobiles',
              route: '',
              children: []
            },
          ]
        },
      ]
    },
    {
      title: 'TV & Home Appliances',
      route: '',
      children: []
    },
    {
      title: 'Health & Beauty',
      route: '',
      children: []
    },
    {
      title: 'Babies & Toys',
      route: '',
      children: []
    },
    {
      title: 'Groceries & Pets',
      route: '',
      children: []
    },
    {
      title: 'Home & Lifestyle',
      route: '',
      children: []
    },
  ];
}
