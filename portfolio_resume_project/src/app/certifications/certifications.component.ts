import { Component, OnInit } from '@angular/core';
import { certificationsData } from './cerficationsData';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent implements OnInit {
  certifications: any;

  ngOnInit(): void {
    this.certifications = certificationsData;
  }
}
