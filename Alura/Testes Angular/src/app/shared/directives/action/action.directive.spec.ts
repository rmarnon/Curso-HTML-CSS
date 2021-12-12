import { ActionDirective } from './action.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActionDirectiveModule } from './action.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

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

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
    const divEl: HTMLLIElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new Event('click');
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked
    or Enter key pressed using debugElement`, () => {
    const divEl = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
    const clickEvent = new Event('click');
    const keyboardEvent = new KeyboardEvent('keyup', { key: 'Enter' });
    divEl.dispatchEvent(clickEvent);
    expect(component.hasEvent()).withContext('Click event').toBeTrue();
    component.resetForNewExpectation();
    divEl.dispatchEvent(keyboardEvent);
    expect(component.hasEvent()).withContext('Keyboard event "keyup"').toBeTrue();
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

  public resetForNewExpectation(): void {
    this.event = null;
  }
}
