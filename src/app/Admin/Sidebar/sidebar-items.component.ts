import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

import { SidebarItemModel } from './sidebar-item.model';

@Component({
    selector: 'admin-sidebar-items',
    templateUrl: './sidebar-items.component.html',
    styleUrls: ['./sidebar-items.component.css']
})
export class SidebarItemsComponent {
    @ViewChild('offerMenu') offerMenu: ElementRef;
    toggle: boolean = false;

    sidebarItems: SidebarItemModel[] = [
        new SidebarItemModel('/admin/offer', 'fa-search', 'Оферти'),
        new SidebarItemModel('/admin/user', 'fa-user-plus', 'Потребители')
    ];

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