import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { sideNavToggle } from './shared/sideNavToggleInterface';
import { allowedUrls } from './app.allowedurls';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    SideBarNavComponent,
    BodyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio_resume_project';
  showNavbar = true;
  isNavbarCollapsed = false;
  screenWidth = 0;
  allowedUrls = allowedUrls;

  constructor(
    private _router: Router
  ){
    _router.events.subscribe(val => {
      if (val instanceof NavigationEnd){
        if (val.url == '/'){
          this._router.navigateByUrl('hero');
        }
        if (!this.allowedUrls.includes(val.url)){
          this.showNavbar = false;
        } else {
          this.showNavbar = true;
        }
      }
    });
  };

  onToggleSideNav(data: sideNavToggle): void {
    this.isNavbarCollapsed = data.isCollapsed;
    this.screenWidth = data.screenWidth;
  }
}