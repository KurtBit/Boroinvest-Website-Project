import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  carouselItems: { src: string, isActive: boolean }[] = [
    { src: '../assets/images/Destinations/dobrovnik.jpg', isActive: true },
    { src: '../assets/images/Destinations/pariss.jpg', isActive: false },
    { src: '../assets/images/Destinations/malta.jpg', isActive: false },
    { src: '../assets/images/Destinations/venecia.jpg', isActive: false }
  ]

  galleryItems: { src: string, isActive: boolean }[] = [
    { src: '../assets/images/Destinations/dobrovnik.jpg', isActive: true },
    { src: '../assets/images/Destinations/pariss.jpg', isActive: false },
    { src: '../assets/images/Destinations/malta.jpg', isActive: false },
    { src: '../assets/images/Destinations/venecia.jpg', isActive: false }
  ]
}
