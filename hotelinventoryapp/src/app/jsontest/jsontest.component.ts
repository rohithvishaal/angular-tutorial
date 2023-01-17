import { Component } from '@angular/core';

@Component({
  selector: 'app-jsontest',
  template: `<div>
  <p>Without JSON pipe:</p>
  <pre>{{object}}</pre>
  <p>With JSON pipe:</p>
  <pre>{{object | json}}</pre>
</div>`,
  styleUrls: ['./jsontest.component.css']
})

export class JsontestComponent {
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
}

