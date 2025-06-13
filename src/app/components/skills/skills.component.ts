import { AfterViewInit, Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface Skill {
  name: string;
  level: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent implements AfterViewInit {
  skillCategories: SkillCategory[] = [
    {
      name: 'Backend Development',
      skills: [
        { name: 'Java', level: 'Experienced', icon: 'fa-brands fa-java' },
        { name: 'Spring Boot', level: 'Experienced', icon: 'bi bi-gear-fill' },
        { name: 'REST APIs', level: 'Experienced', icon: 'bi bi-hdd-network' },
        { name: 'Microservices', level: 'Experienced', icon: 'bi bi-diagram-3' }
      ]
    },
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular18', level: 'Experienced', icon: 'fa-brands fa-angular' },
        { name: 'HTML5', level: 'Experienced', icon: 'fa-brands fa-html5' },
        { name: 'TypeScript', level: 'Intermediate', icon: 'bi bi-bootstrap' },
        { name: 'CSS3', level: 'Experienced', icon: 'fa-brands fa-css' },
        { name: 'Bootstrap5', level: 'Experienced', icon: 'fa-brands fa-bootstrap' },
        { name: 'JavaScript', level: 'Intermediate', icon: 'fa-brands fa-js' },
        
      ]
    },
    {
      name: 'DataBases & Other Tools',
      skills: [
        { name: 'MySQL', level: 'Experienced', icon: 'bi bi-database-fill' },
        { name: 'GitHub', level: 'Experienced', icon: 'fa-brands fa-github' },
              ]
    }
  ];
  constructor(private viewportScroller: ViewportScroller) {
    gsap.registerPlugin(ScrollTrigger);
  }
 ngAfterViewInit(): void {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.skill-category').forEach((el: any) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      scale: 0.5,
    },
    {
      opacity: 1,
      scale: 1,
      ease: 'none', // disables easing for exact scroll match
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'top 60%',
        scrub: true, // true = real-time, no easing
        // markers: true // for debugging
      }
    }
  );
});

 }


  }
