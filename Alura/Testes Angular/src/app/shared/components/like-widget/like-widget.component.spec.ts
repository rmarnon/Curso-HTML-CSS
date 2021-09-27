import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {

  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
      providers: [{
        provide: ComponentFixtureAutoDetect,
        useValue: true
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Shoyld auto generate ID when is input property is missing', () => {
    const component = fixture.componentInstance;
    //fixture.detectChanges();

    expect(component.id).toBeTruthy()
  });

  it('Shoult NOT generate ID when id input is present', () =>{
    const component = fixture.componentInstance;
    const id = 'someId';
    component.id = id;

    //fixture.detectChanges();
    expect(component.id).toBe(id);
  });

});
