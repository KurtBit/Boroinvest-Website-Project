import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
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