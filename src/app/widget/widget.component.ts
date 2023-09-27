import { Component, OnInit } from '@angular/core';
import { WidgetService } from './widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit{
  rate!: number;
  isActive: boolean = true;
  eventSource!: EventSource;
  
  constructor(private widgetService: WidgetService){}

  ngOnInit(): void {
    this.setupEventSource();
  }

  toggleWidget() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.startEventSource();
    } else {
      this.stopEventSource();
    }
  }

  private setupEventSource() {
    this.eventSource = this.widgetService.startEventSource();
    this.eventSource.addEventListener('message', (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      this.rate = data.rate;
    });

    this.eventSource.onerror = (error) => {
      console.error('SSE Error:', error);
      this.stopEventSource();
    };
  }

  private startEventSource() {
    if (this.eventSource && this.eventSource.readyState === EventSource.CLOSED) {
      this.setupEventSource();
    }
  }

  private stopEventSource() {
    if (this.eventSource) {
      this.widgetService.stopEventSource();
    }
  }
}
