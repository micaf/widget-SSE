import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetComponent } from './widget.component';
import { WidgetService } from './widget.service';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;
  let widgetService: WidgetService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [WidgetComponent],
      providers: [WidgetService],
    });

    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
