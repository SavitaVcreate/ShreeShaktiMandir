import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  signal,
  ViewChild,
} from '@angular/core';

import { Navbar } from './reuseable/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('ShreeShaktiMandir');
  @ViewChild('krishnaAarti') audioPlayer!: ElementRef<HTMLAudioElement>;

  isLoading: boolean = true;
  isSearchActive: boolean = false;
  marqueeText: string =
    'Jai Shree Shakti Mata ||  जय श्री शक्ति माता || Jai Shree Shakti Mata || जय श्री शक्ति माता  || Jai Shree Shakti Mata ||  जय श्री शक्ति माता';

  isPlaying: boolean = false;
  showBackToTop: boolean = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  // =========================
  // Page Loader
  // =========================

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 2000);
  }

  preloader(): void {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }, 100);
    });
  }
  // aarti
  toggleAarti(): void {
    if (!this.audioPlayer) return;
    const audio = this.audioPlayer.nativeElement;
    if (this.isPlaying) {
      audio.pause();
      this.isPlaying = false;
    } else {
      audio
        .play()
        .then(() => {
          this.isPlaying = true;
        })
        .catch((error) => {
          console.log('Audio Play Error:', error);
        });
    }
  }
  @HostListener('window:scroll', []) onWindowScroll(): void {
    if (window.scrollY > 300) {
      this.showBackToTop = true;
    } else {
      this.showBackToTop = false;
    }
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
