import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    SideBarNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio_resume_project';
  endpoint: string;

  constructor(
    private _router: Router
  ){
    this.endpoint = _router.url;
  }
}