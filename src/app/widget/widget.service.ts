import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private eventSource!: EventSource
  constructor() { 
  }

  startEventSource() {
    this.eventSource = new EventSource('http://135.125.205.136:3000/sse');
    return this.eventSource;
  }

  stopEventSource() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }

}
