
// header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule,
    RouterLink
  ],
  template: `
    <header class="sticky top-0 z-50 bg-[#FDF6EC]/95 backdrop-blur-sm border-b border-[#E5D6C3] py-4 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center space-x-2">
            <h1 class="font-cormorant text-3xl md:text-4xl font-medium">Ziri Design</h1>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <a routerLink="/" class="font-cormorant text-xl hover:text-[#8B7355] transition-colors">Accueil</a>
            <a routerLink="/about" class="font-cormorant text-xl hover:text-[#8B7355] transition-colors">À propos</a>
            <a routerLink="/contact" class="font-cormorant text-xl hover:text-[#8B7355] transition-colors">Contact</a>
          </nav>

          <!-- Icons -->
          <div class="flex items-center space-x-4">
            <a 
              routerLink="/login" 
              class="p-2 rounded-full hover:bg-[#E5D6C3]/50 transition-colors mr-2" 
              title="Boutique"
            >
              <ng-icon name="heroShoppingBag" size="20"></ng-icon>
            </a>

            <button 
              class="md:hidden p-2 rounded-full hover:bg-[#E5D6C3]/50 transition-colors"
              (click)="toggleMobileMenu()"
            >
              <ng-icon name="heroBars3" size="24"></ng-icon>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <nav *ngIf="mobileMenuOpen" class="md:hidden pt-4 pb-2 border-t border-[#E5D6C3] mt-4 space-y-3">
          <a routerLink="/" class="block font-cormorant text-xl py-2 hover:text-[#8B7355]">Accueil</a>
          <a routerLink="/about" class="block font-cormorant text-xl py-2 hover:text-[#8B7355]">À propos</a>
          <a routerLink="/contact" class="block font-cormorant text-xl py-2 hover:text-[#8B7355]">Contact</a>
          <a routerLink="/login" class="block font-cormorant text-xl py-2 hover:text-[#8B7355]">Boutique</a>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
