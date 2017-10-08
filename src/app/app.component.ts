import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  images: { src: string, isActive: boolean }[] = [
    { src: 'https://www.w3schools.com/bootstrap/la.jpg', isActive: true },
    { src: 'https://www.w3schools.com/bootstrap/chicago.jpg', isActive: false },
    { src: 'https://www.w3schools.com/bootstrap/ny.jpg', isActive: false }
  ]
}
