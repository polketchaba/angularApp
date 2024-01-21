import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  prices = [
    {
      level: "Basic",
      corrency: "$",
      price: "20",
      element1: "Responsive Websites",
      element2: "Domain Name Free",
      element3: "Mobile Friendly",
      element4: "Webmail Support",
      element5: "Custumer Support 24/7",
      position: ""
    },
    {
      level: "STANDARD",
      corrency: "$",
      price: "40",
      element1: "Responsive Websites",
      element2: "Domain Name Free",
      element3: "Mobile Friendly",
      element4: "Webmail Support",
      element5: "Custumer Support 24/7",
      position: "card-second"
    },
    {
      level: "UNLIMITED",
      corrency: "$",
      price: "60",
      element1: "Responsive Websites",
      element2: "Domain Name Free",
      element3: "Mobile Friendly",
      element4: "Webmail Support",
      element5: "Custumer Support 24/7",
      position: ""
    }
  ]
}
