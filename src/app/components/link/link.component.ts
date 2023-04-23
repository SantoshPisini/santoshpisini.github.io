import { Component, Input, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() url: string = '';
  @Input() label: string = '';
  @Input() eventType: string = '';

  constructor(private analytics: AnalyticsService) {}

  ngOnInit(): void {}

  open(label: string) {
    this.analytics.logEvent('open_' + this.eventType, { label: label });
  }
}
