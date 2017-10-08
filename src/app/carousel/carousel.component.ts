import { Component, Input } from '@angular/core';

@Component({
    selector: 'Carousel',
    template: `
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="item-container" *ngFor="let img of images">
                    <div class="item" *ngIf="img.isActive">
                        <img [src]="img.src" alt="Los Angeles">
                    </div>
                </div>
            </div>

            <a class="left carousel-control" (click)="handleLeftClick($event)">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" (click)="handleRightClick($event)">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    `,
    styles: [
        `
            img {
                width: 100%;
            }
        `
    ]
})
export class CarouselComponent {
    @Input() images : { src: string, isActive: boolean }[];

    public handleLeftClick($event) {
        let index =  this.images.findIndex((x) => x.isActive === true);
        let prevIndex = (index - 1);

        if(prevIndex < 0) {
            prevIndex += this.images.length;
        }

        this.images[index].isActive = false;
        this.images[prevIndex].isActive = true;
    }

    public handleRightClick($event) {
        let index =  this.images.findIndex((x) => x.isActive === true);
        let nextIndex = (index + 1) % this.images.length;

        this.images[index].isActive = false;
        this.images[nextIndex].isActive = true;
    }
}