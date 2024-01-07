import { Component } from '@angular/core';
import { navigationData } from './navigationData';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  sideBarNavigationData = navigationData
  isCollapsed = false;

}
