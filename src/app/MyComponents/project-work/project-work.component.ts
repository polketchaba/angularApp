import { Component } from '@angular/core';

@Component({
  selector: 'app-project-work',
  templateUrl: './project-work.component.html',
  styleUrl: './project-work.component.css'
})
export class ProjectWorkComponent {
    
    projects = [
      {
        name: "CMS Instalation",
        amount: "1500"
      },
      {
        name: "Awards Won",
        amount: "2500"
      },
      {
        name: "Happy Clients",
        amount: "700"
      },
      {
        name: "Working On",
        amount: "500"
      }
    ]
}
