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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Shoyld auto generate ID when is input property is missing', () => {
    fixture.detectChanges();

    expect(component.id).toBeTruthy()
  });

  it('Shoult NOT generate ID when id input is present', () =>{
    const id = 'someId';
    component.id = id;

    fixture.detectChanges();
    expect(component.id).toBe(id);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    Should trigger emission when called`, (done) => {
      fixture.detectChanges();
      component.liked.subscribe(() => {
        expect(true).toBeTrue();
        done();
      });
      component.like();
    });

  it(`#${LikeWidgetComponent.prototype.like.name}
    Should trigger emission when called using SPY`, () => {
      spyOn(component.liked, 'emit');
      fixture.detectChanges();
      component.like();

      expect(component.liked.emit).toHaveBeenCalled();
    });

});
