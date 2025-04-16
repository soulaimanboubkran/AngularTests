import { Component } from '@angular/core';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './main.routes';
import { NgIconsModule } from '@ng-icons/core';
import { importProvidersFrom } from '@angular/core';
import { heroShoppingBag, heroBars3 } from '@ng-icons/heroicons/outline';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NgIconsModule // Import NgIconsModule in the root component
  ],
  template: `
    <app-header/>
    <main>
      <router-outlet/>
    </main>
  `
})
export class App {
  showModal = false;
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(NgIconsModule.withIcons({ heroShoppingBag, heroBars3 })) // Correctly register icons globally
  ]
}).catch(err => console.error(err));