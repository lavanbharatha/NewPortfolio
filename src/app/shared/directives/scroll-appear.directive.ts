// src/app/shared/directives/scroll-appear.directive.ts
import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollAppear]',
  standalone: true
})
export class ScrollAppearDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px 0px -40% 0px', // Trigger when element reaches 40% from bottom
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'visible');
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}
