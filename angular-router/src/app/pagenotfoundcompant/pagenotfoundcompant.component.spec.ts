import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoundcompantComponent } from './pagenotfoundcompant.component';

describe('PagenotfoundcompantComponent', () => {
  let component: PagenotfoundcompantComponent;
  let fixture: ComponentFixture<PagenotfoundcompantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotfoundcompantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoundcompantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
