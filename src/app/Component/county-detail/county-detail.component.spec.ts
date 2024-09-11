import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyDetailComponent } from './county-detail.component';

describe('CountyDetailComponent', () => {
  let component: CountyDetailComponent;
  let fixture: ComponentFixture<CountyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
