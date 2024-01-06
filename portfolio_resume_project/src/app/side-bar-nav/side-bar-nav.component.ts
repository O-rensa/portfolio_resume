import { Component } from '@angular/core';
import { navigationData } from './navigationData';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar-nav',
  standalone: true,
  imports: [NgFor,
    RouterLink
  ],
  templateUrl: './side-bar-nav.component.html',
  styleUrl: './side-bar-nav.component.css'
})
export class SideBarNavComponent {
  sideBarNavigationData = navigationData

}
