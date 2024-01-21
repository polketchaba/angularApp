import { Component } from '@angular/core';

@Component({
  selector: 'app-serviceoffers',
  templateUrl: './serviceoffers.component.html',
  styleUrl: './serviceoffers.component.css'
})
export class ServiceoffersComponent {

  skills = [
    { name: 'HTML', percentage: 100, backgroundColor: '' },
    { name: 'CSS', percentage: 90, backgroundColor: 'success' },
    { name: 'JavaScript', percentage: 80, backgroundColor: 'warning' },
    { name: 'ReactJS', percentage: 50, backgroundColor: 'info' },
    { name: 'NodeJS', percentage: 40, backgroundColor: 'danger' }
  ];

  services = [
    {
      name: "Website Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt.",
      icon: "desktop"
    },
    {
      name: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt.",
      icon: "wifi"
    },
    {
      name: "Support 24/7",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt.",
      icon: "phone"
    }
  ]
}
