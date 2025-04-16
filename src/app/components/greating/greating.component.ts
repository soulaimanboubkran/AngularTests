import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greating',
  imports: [],
  templateUrl: './greating.component.html',
  styleUrl: './greating.component.css'
})
export class GreatingComponent {
    message = input<string>('')
}
