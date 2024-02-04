import { NgFor } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { creationsData } from './creationsData';

@Component({
  selector: 'app-creations',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './creations.component.html',
  styleUrl: './creations.component.css',
})
export class CreationsComponent implements OnInit {
  creations: any;

  constructor() {
  }

  ngOnInit(): void {
    this.creations = creationsData;
  }
}
