import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() galleryItems: { src: string, isActive: boolean }[];

  public activeGalleryItem: { src: string, isActive: boolean };

  ngOnInit(): void {
    this.activeGalleryItem = this.galleryItems.find((x) => x.isActive);
  }

  public handleGalleryItemSelection(activeGalleryItem) {
    if (this.activeGalleryItem === activeGalleryItem) {
      this.activeGalleryItem.isActive = false;
      this.activeGalleryItem = null;
    } else {
      if(this.activeGalleryItem){
        this.activeGalleryItem.isActive = false;
      }
     
      this.activeGalleryItem = activeGalleryItem;
      this.activeGalleryItem.isActive = true;
    }
  }
}
