import { Directive, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAppear]',
  standalone: true
})
export class ScrollAppearDirective implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Adjust this value to change when animation triggers
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
          // Optional: Unobserve after first appearance
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}