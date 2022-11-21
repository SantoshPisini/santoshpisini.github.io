import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[] = [
    { text: 'About', sectionLink: 'about' },
    { text: 'Work', sectionLink: 'work' },
    { text: 'Contact', sectionLink: 'contact' },
  ];
  constructor() {}

  ngOnInit(): void {}

  scrollTo(element: any): void {
    console.log(element);

    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

interface NavItem {
  text: string;
  sectionLink: string;
}
