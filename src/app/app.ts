import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeComponent } from './shared/layout/theme/theme.component';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		ThemeComponent
	],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
