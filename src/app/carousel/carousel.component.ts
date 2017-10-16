import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'Carousel',
    template: `
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="item-container" *ngFor="let img of carouselItems">
                    <div #imgWrapper class="item" *ngIf="img.isActive">
                        <img #image class="carousel-image" [src]="img.src" alt="Los Angeles">
                    </div>
                </div>
            </div>

            <a id="left" class="left carousel-control" (click)="handleLeftClick($event)">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a id="right" class="right carousel-control" (click)="handleRightClick($event)">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    `,
    styles: [
        `
            img {
                width: 100%;
                position: relative;
                transition: 2s;
            }
        `
    ]
})
export class CarouselComponent {
    @ViewChild('image') currentImage: ElementRef;
    @ViewChild('imgWrapper') imgWrapper: ElementRef;

    @Input() carouselItems : { src: string, isActive: boolean }[];

    public handleLeftClick($event) {
        let index =  this.carouselItems.findIndex((x) => x.isActive);
        let prevIndex = (index - 1);

        if(prevIndex < 0) {
            prevIndex += this.carouselItems.length;
        }

        this.currentImage.nativeElement.style = 'left: 0';
        
        this.imgWrapper.nativeElement.insertAdjacentHTML(
            'afterbegin', (
                '<img id="appended" style="width:100%; position: absolute; " src="' + 
                    this.carouselItems[prevIndex].src +'">'));

        setTimeout(() => {
            this.currentImage.nativeElement.style = 'left: 100%';
        }, 0);

        setTimeout(() => {
            this.carouselItems[index].isActive = false;
            this.carouselItems[prevIndex].isActive = true;
        }, 2000);
        
    }

    public handleRightClick($event) {
        let index =  this.carouselItems.findIndex((x) => x.isActive);
        let nextIndex = (index + 1) % this.carouselItems.length;

        this.currentImage.nativeElement.style = 'right: 0';
        
        this.imgWrapper.nativeElement.insertAdjacentHTML(
            'afterbegin', (
                '<img id="appended" style="width:100%; position: absolute; " src="' + 
                    this.carouselItems[nextIndex].src +'">'));

        setTimeout(() => {
            this.currentImage.nativeElement.style = 'right: 100%';
        }, 0);

        setTimeout(() => {
            this.carouselItems[index].isActive = false;
            this.carouselItems[nextIndex].isActive = true;
        }, 2000);
        
    }
}