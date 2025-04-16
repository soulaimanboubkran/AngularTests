

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
    NgIconsModule
  ],
  template: `
    <main class="container mx-auto px-4 py-8">
      <!-- Hero Section -->
      <section class="text-center py-16 md:py-24 max-w-4xl mx-auto">
        <h1 class="font-cormorant text-4xl md:text-6xl font-medium mb-6">
          Artisanat Berbère Authentique
        </h1>
        <p class="text-lg md:text-xl mb-8 text-gray-700">
          Découvrez notre collection de pièces uniques fabriquées par des artisans marocains.
          Chaque produit raconte une histoire et préserve un héritage culturel riche.
        </p>
        <a 
          href="#featured" 
          class="inline-block bg-[#8B7355] text-white px-8 py-3 rounded-md hover:bg-[#6F5B45] transition-colors"
        >
          Découvrir la collection
        </a>
      </section>

      <!-- Featured Products -->
      <section id="featured" class="py-16">
        <h2 class="font-cormorant text-3xl md:text-4xl text-center mb-12">Nos Pièces Phares</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Product Card 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="h-64 bg-[#E5D6C3]"></div>
            <div class="p-6">
              <h3 class="font-cormorant text-2xl mb-2">Tapis Azilal</h3>
              <p class="text-gray-600 mb-4">Tapis berbère tissé à la main avec des motifs géométriques traditionnels.</p>
              <div class="flex justify-between items-center">
                <span class="font-medium text-lg">3200 MAD</span>
                <button class="bg-[#8B7355] text-white p-2 rounded-full hover:bg-[#6F5B45] transition-colors">
                  <ng-icon name="heroShoppingBag" size="20"></ng-icon>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Product Card 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="h-64 bg-[#E5D6C3]"></div>
            <div class="p-6">
              <h3 class="font-cormorant text-2xl mb-2">Poterie Safi</h3>
              <p class="text-gray-600 mb-4">Céramique traditionnelle peinte à la main par des artisans de Safi.</p>
              <div class="flex justify-between items-center">
                <span class="font-medium text-lg">850 MAD</span>
                <button class="bg-[#8B7355] text-white p-2 rounded-full hover:bg-[#6F5B45] transition-colors">
                  <ng-icon name="heroShoppingBag" size="20"></ng-icon>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Product Card 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="h-64 bg-[#E5D6C3]"></div>
            <div class="p-6">
              <h3 class="font-cormorant text-2xl mb-2">Bijoux en Argent</h3>
              <p class="text-gray-600 mb-4">Bijoux berbères en argent ciselé avec des motifs ancestraux.</p>
              <div class="flex justify-between items-center">
                <span class="font-medium text-lg">1500 MAD</span>
                <button class="bg-[#8B7355] text-white p-2 rounded-full hover:bg-[#6F5B45] transition-colors">
                  <ng-icon name="heroShoppingBag" size="20"></ng-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Preview -->
      <section class="py-16 bg-[#FDF6EC] rounded-lg p-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <div class="bg-[#E5D6C3] h-80 w-full rounded-lg"></div>
          </div>
          <div class="md:w-1/2 md:pl-12">
            <h2 class="font-cormorant text-3xl md:text-4xl mb-6">Notre Histoire</h2>
            <p class="text-gray-700 mb-6">
              Ziri Design est né d'une passion pour l'artisanat berbère et d'une volonté de préserver 
              les techniques ancestrales tout en les réinterprétant pour le monde contemporain.
              Nous collaborons directement avec des artisans dans différentes régions du Maroc.
            </p>
            <a 
              href="/about" 
              class="inline-block border-2 border-[#8B7355] text-[#8B7355] px-6 py-2 rounded-md hover:bg-[#8B7355] hover:text-white transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>
    </main>
  `
})
export class HomeComponent {}