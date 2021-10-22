import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should trigger (@Output liked) once when called multiple times within debounce time',fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    component.like();
    tick(500);
    expect(times).toBe(1);
  }));

});
