import { Component, EventEmitter, Output } from '@angular/core';
import { navigationData } from './navigationData';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { sideNavToggle } from '../shared/sideNavToggleInterface';

@Component({
  selector: 'app-side-bar-nav',
  standalone: true,
  imports: [NgFor, NgClass, NgIf,
    RouterLink
  ],
  templateUrl: './side-bar-nav.component.html',
  styleUrl: './side-bar-nav.component.css'
})
export class SideBarNavComponent {
  @Output() onToggleSideNav: EventEmitter<sideNavToggle> = new EventEmitter();
  sideBarNavigationData = navigationData
  screenWidth = 0;
  isCollapsed = false;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.onToggleSideNav.emit({screenWidth: this.screenWidth, isCollapsed: this.isCollapsed});
  }

  closeSideNav(): void {
    this.isCollapsed = false;
    this.onToggleSideNav.emit({screenWidth: this.screenWidth, isCollapsed: this.isCollapsed});
  }
}
