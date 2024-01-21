import { Component } from '@angular/core';

@Component({
  selector: 'app-happyclients',
  templateUrl: './happyclients.component.html',
  styleUrl: './happyclients.component.css'
})
export class HappyclientsComponent {

  carouselItems = [
    {
      projects: [
        { name: 'Anil Swami', role: 'Web Developer', description: 'Lorem ipsum...', image: 'image/clients-thumb.jpg' },
        { name: 'Anil Swami', role: 'Web Developer', description: 'Lorem ipsum...', image: 'image/clients-thumb.jpg' },
        { name: 'Anil Swami', role: 'Web Developer', description: 'Lorem ipsum...', image: 'image/clients-thumb.jpg' }
      
      ]
    },
    {
      projects: [
        { name: 'Anil Swami', role: 'Web Developer', description: 'Lorem ipsum...', image: 'image/clients-thumb.jpg' },
        { name: 'Anil Swami', role: 'Web Developer', description: 'Lorem ipsum...', image: 'image/clients-thumb.jpg' },
        { name: 'Anil Swami', role: 'Web Developer', description: 'Lorem ipsum...', image: 'image/clients-thumb.jpg' }
      
      ]
    },
    {
      projects: [
        { name: 'Anil Swami', role: 'Web Developer', description: 'Lorem ipsum...', image: 'image/clients-thumb.jpg' },
        { name: 'Anil Swami', role: 'Web Developer', description: 'Lorem ipsum...', image: 'image/clients-thumb.jpg' },
        { name: 'Anil Swami', role: 'Web Developer', description: 'Lorem ipsum...', image: 'image/clients-thumb.jpg' }
   
      ]
    }

  ];
  
}
