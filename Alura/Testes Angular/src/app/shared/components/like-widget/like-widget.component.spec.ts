import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {

  let fixture: ComponentFixture<LikeWidgetComponent>;
  let component: LikeWidgetComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();

    expect(component.id).toBeTruthy()
  });

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const id = 'someId';
    component.id = id;

    fixture.detectChanges();
    expect(component.id).toBe(id);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    Should trigger (@Output liked) when called`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });
    component.like();
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    Should trigger (@Output liked) when called using SPY`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();

    expect(component.liked.emit).toHaveBeenCalled();
  });

  it(`(D) Should display number of likes when clicked`, done => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();

      const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
      expect(counterEl.textContent.trim()).toBe('1');
      done();
    });

    const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
    likeWidgetContainerEl.click();
  });

  it(`(D) Should display number of likes when Enter key is pressed`, done => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();

      const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
      expect(counterEl.textContent.trim()).toBe('1');
      done();
    });

    const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    likeWidgetContainerEl.dispatchEvent(event);
  });

});
