import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CoverpageComponent } from './coverpage/coverpage.component';

@Component({
  selector: 'app-root',
  imports: [ CoverpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'litra';
}
