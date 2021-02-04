import { TestBed, waitForAsync } from '@angular/core/testing';
import { BulimasAppComponent } from './bulimas.app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BulimasAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BulimasAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bulima-solution'`, () => {
    const fixture = TestBed.createComponent(BulimasAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bulima-solution');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BulimasAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('bulima-solution app is running!');
  });
});
