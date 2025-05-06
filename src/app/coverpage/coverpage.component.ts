import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'litra-coverpage',
  imports: [CardModule, TagModule],
  templateUrl: './coverpage.component.html',
  styleUrl: './coverpage.component.css',
})
export class CoverpageComponent {}
