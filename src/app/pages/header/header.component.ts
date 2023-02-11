import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[] = [
    { text: 'About', sectionLink: 'about' },
    { text: 'Work', sectionLink: 'work' },
    { text: 'Project', sectionLink: 'project' },
    { text: 'Contact', sectionLink: 'contact' },
  ];
  constructor() {
    this.navItems = [];
  }

  ngOnInit(): void {}

  scrollTo(element: any): void {
    console.log(element);

    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  openResume() {
    window.open(environment.resumeLink, '_blank');
  }
}

interface NavItem {
  text: string;
  sectionLink: string;
}
