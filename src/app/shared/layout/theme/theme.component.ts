import { Component, inject } from '@angular/core';
import { AppTheme, ThemeAppService } from '../../../core/services/themeApp.service';

@Component({
	selector: 'app-theme',
	imports: [

	],
	templateUrl: './theme.component.html',
	styleUrl: './theme.component.css',
})
export class ThemeComponent {
	themeAppService = inject(ThemeAppService);
	appTheme = AppTheme

	choiceTheme = false;
}
