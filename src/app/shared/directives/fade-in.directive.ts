import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[fadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    observer.observe(this.element.nativeElement);
  }
}