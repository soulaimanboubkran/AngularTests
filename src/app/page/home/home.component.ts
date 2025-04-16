

// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule,

    

  ],
  template: `
  
  <div class="w-full max-w-sm min-w-[200px]">
  <div class="relative">            
    <input 
      (keydown)="handle($event)" 
      type="text" 
      class="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
      placeholder="Type here..." 
    />

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600">
      <path d="..." />
    </svg>
  </div>
</div>



  `
})
export class HomeComponent {


  handle(e: KeyboardEvent): void {
    const input = e.target as HTMLInputElement;
    console.log('Value:', input.value);
    console.log('Key pressed:', e.key);
  }
}