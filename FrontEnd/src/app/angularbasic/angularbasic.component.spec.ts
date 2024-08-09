import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularbasicComponent } from './angularbasic.component';

describe('AngularbasicComponent', () => {
  let component: AngularbasicComponent;
  let fixture: ComponentFixture<AngularbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularbasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
