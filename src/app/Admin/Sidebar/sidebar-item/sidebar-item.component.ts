import { Component, OnInit, Input } from '@angular/core';
import { SidebarItemModel } from '../sidebar-item.model';

@Component({
  selector: 'admin-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {
  @Input('item') sidebarItem: SidebarItemModel;

  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSideMenu() {
    this.isCollapsed = !this.isCollapsed
    
    return this.isCollapsed;
  }
}
