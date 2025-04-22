import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  professionalSummary = `
   Hi, I'm Lavan Bharatha — a results-driven Full Stack Developer with over 2 years of experience building high-performance, enterprise-grade web applications.

⚙️ I specialize in crafting scalable Java Spring Boot backends and dynamic Angular frontends, ensuring clean architecture, RESTful APIs, and seamless user experiences. My development journey has been shaped by impactful projects in the insurance and retail domains, partnering with top brands like Liberty Mutual and Finish Line Inc.

I thrive on turning complex problems into elegant solutions using a combination of:

💡 Deep technical expertise

🤝 Collaborative teamwork

🧠 Strong problem-solving mindset

Let’s build something exceptional together.
  `;

  keySkills = [
    'Full Stack Development',
    'RESTful API Design',
    'Database Design',
    'Agile Methodologies',
    'Problem Solving',
    'Team Collaboration'
  ];

  interests = [
    'Open Source Contribution',
    'Tech Blogging',
    'Continuous Learning',
    'UI/UX Design'
  ];
} 