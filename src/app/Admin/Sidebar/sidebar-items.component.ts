import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
    selector: 'admin-sidebar-items',
    templateUrl: './sidebar-items.component.html',
    styleUrls: ['./sidebar-items.component.css']
})
export class SidebarItemsComponent {
    @ViewChild('offerMenu') offerMenu: ElementRef;
    toggle: boolean = false;

    constructor(private renderer: Renderer2) {
    }

    toggleSideMenu() {
        console.log(this.offerMenu);
        if (this.toggle) {
            this.renderer.addClass(this.offerMenu.nativeElement, 'collapse');
            this.renderer.removeClass(this.offerMenu.nativeElement, 'collapse-in');
            this.toggle = !this.toggle;
        } else {
            this.renderer.addClass(this.offerMenu.nativeElement, 'collapse-in');
            this.renderer.addClass(this.offerMenu.nativeElement, 'collapse');
            this.toggle = !this.toggle;
        }
    }
}