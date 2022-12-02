import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navigation, Router, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback.component';


//RUN TEST:
//ng test --include=src/app/feedback/feedback.component.spec.ts

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  //let router = { navigate: jasmine.createSpy('navigate') }
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })

      .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark name as invalid when it has only one character', () => {
    const ctrl = component.fbForm.get('name')
    ctrl?.setValue('A');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeFalsy();
  });

  it('cancel navigates to home page', () => {
    //const routerSpy = spyOn(router, 'navigate');
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });
});
