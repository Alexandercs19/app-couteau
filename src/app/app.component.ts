import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'Characters', url: '/characters', icon: 'body' },
    { title: 'Moments', url: '/moments', icon: 'albums' },
    { title: 'About it', url: '/about-it', icon: 'information-circle' },
    { title: 'Main Reason', url: '/in-life', icon: 'man' },
    { title: 'Hire me', url: '/hire-me', icon: 'briefcase' },
  ];
  constructor() {}
}
