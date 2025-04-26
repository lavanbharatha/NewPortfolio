import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[fadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit {
  constructor(private element: ElementRef) {
    // Set initial styles
    this.element.nativeElement.style.opacity = '0';
    this.element.nativeElement.style.transform = 'translateY(50px)';
    this.element.nativeElement.style.transition = 'all 0.6s ease-out';
  }

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation styles when element is visible
          this.element.nativeElement.style.opacity = '1';
          this.element.nativeElement.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    observer.observe(this.element.nativeElement);
  }
}