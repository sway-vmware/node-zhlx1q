import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  features = [
    { name_a: "test 1", state_a: "enabled", name_b: "test 2", state_b: "enabled" }
  ];
}
