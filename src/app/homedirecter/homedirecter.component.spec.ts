import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedirecterComponent } from './homedirecter.component';

describe('HomedirecterComponent', () => {
  let component: HomedirecterComponent;
  let fixture: ComponentFixture<HomedirecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomedirecterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomedirecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
