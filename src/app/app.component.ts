import { Component, Injector} from '@angular/core';
import { createCustomElement} from '@angular/elements';
import { HelloComponent } from './hello/hello.component';

@Component({
    selector: 'app-hello',
    template: ``,
})
export class AppComponent {
  constructor(private injector: Injector) {
    const AppHelloElement = createCustomElement(HelloComponent, {
      injector: this.injector,
    });
    customElements.define('app-hello', AppHelloElement);
  }
}
