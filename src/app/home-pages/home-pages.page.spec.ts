import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePagesPage } from './home-pages.page';

describe('HomePagesPage', () => {
  let component: HomePagesPage;
  let fixture: ComponentFixture<HomePagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
