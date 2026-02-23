import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeComponent } from './shared/layout/theme/theme.component';

import { LucideAngularModule, FileIcon, SearchCode } from 'lucide-angular';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		ThemeComponent,
		LucideAngularModule
	],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
//   readonly fileIcon = FileIcon;

  readonly icons = {
	searchCode: SearchCode,
	fileIcon: FileIcon
  }
}
