import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNotificationsComponent } from './home-notifications.component';

describe('HomeNotificationsComponent', () => {
  let component: HomeNotificationsComponent;
  let fixture: ComponentFixture<HomeNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
