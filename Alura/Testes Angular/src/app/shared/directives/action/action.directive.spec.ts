import { ActionDirective } from './action.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActionDirectiveModule } from './action.module';
import { Component } from '@angular/core';

describe(ActionDirective.name, () => {

  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule]
    });

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it(`(D) (@Output appAction) should emit event with payload when ENTER key is pressed`, () => {
    const divEl: HTMLLIElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

});

@Component({
  template: `<div class="dummy-component" (appAction)="actionHandlerTest($event)"></div>`
})
class ActionDirectiveTestComponent {

  private event: Event = null;

  public actionHandlerTest(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }
}
