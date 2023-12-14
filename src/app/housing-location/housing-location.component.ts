import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="this.baseurl + housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

  baseurl = 'https://angular.io/assets/images/tutorials/faa';

  // 初回レンダリング
  ngOnInit(): void {
    console.log('初回レンダリング');
    console.log(this.housingLocation);
  }
  // 変更検知（Angularでは変更が先に実行される）
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['housingLocation']) {
      console.log('Housing Location changed:', this.housingLocation);
    }
  }
}
