import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  words = [
    "Freelancer",
    "Data Analyst",
    "Web Developer"
  ]
  typeSpeed = 100;
  deleteSpeed = 80;

  wordIndex = signal(0);
  word = computed(() => this.words[this.wordIndex()]);

  textIndex = signal(0);
  text = computed(() => this.word().slice(0, this.textIndex()));

  showTitles = false;

  constructor(){

  }

  ngOnInit(): void {
    this.type();
  }

  type(): void {
    const int = setInterval(() => {
      this.textIndex.update((v) => v + 1);
      if (this.textIndex() > this.word().length) {
        clearInterval(int);
        this.delete();
      }
    }, this.typeSpeed);
  }

  delete(): void {
    const int = setInterval(() => {
      this.textIndex.update((v) => v - 1);
      if (this.textIndex() < 0) {
        this.wordIndex.update((v) => (v + 1) % this.words.length);
        clearInterval(int);
        this.textIndex.set(0);
        this.type();
      }
    }, this.deleteSpeed);
  }
}
