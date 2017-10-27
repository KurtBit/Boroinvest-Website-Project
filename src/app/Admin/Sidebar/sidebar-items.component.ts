import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

import { SidebarItemModel } from './sidebar-item.model';

@Component({
    selector: 'admin-sidebar-items',
    templateUrl: './sidebar-items.component.html',
    styleUrls: ['./sidebar-items.component.css']
})
export class SidebarItemsComponent {
    @ViewChild('offerMenu') offerMenu: ElementRef;

    sidebarItems: SidebarItemModel[] = [
        new SidebarItemModel('/admin/offers', 'fa-search', 'Оферти',
                [new SidebarItemModel('/admin/offers/add', 'fa-angle-double-right', 'Добави Офертa')]),
        new SidebarItemModel('/admin/users', 'fa-user-plus', 'Потребители',
                [new SidebarItemModel('/admin/users/add', 'fa-angle-double-right', 'Добави Потребител')])
    ];

    constructor() {
    }
}