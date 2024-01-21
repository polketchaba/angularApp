import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  headerTitles = [
    {
      id: 1,
      name: "Home",
      href:"#",
      active: true
    },
    {
      id: 2,
      name: "service",
      href: "#servicediv",
      active:false
    },
    {
      id: 3,
      name: "Prises",
      href: "#pricingdiv",
      active:false
    },
    {
      id: 4,
      name: "About",
      href: "#newsletterdiv",
      active:false
    },
    {
      id: 5,
      name: "Contact",
      href: "#contactdiv",
      active:false
    },
    {
      id: 6,
      name: "Shops",
      href: "#shops",
      active:false
    }
  ];
}
