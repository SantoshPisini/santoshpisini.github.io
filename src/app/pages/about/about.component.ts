import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private analytics: AnalyticsService) {}

  ngOnInit(): void {}

  openCompany() {
    this.analytics.logEvent('open_company', { company: 'Microsoft' });
  }
}
