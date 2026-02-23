import { Component, inject } from '@angular/core';
import { AppTheme, ThemeAppService } from '../../../core/services/themeApp.service';
import { LucideAngularModule, SunDimIcon, MoonIcon, MonitorCog } from 'lucide-angular';

@Component({
	selector: 'app-theme',
	imports: [
		LucideAngularModule
	],
	templateUrl: './theme.component.html',
	styleUrl: './theme.component.css',
})
export class ThemeComponent {
	themeAppService = inject(ThemeAppService);
	appTheme = AppTheme

	choiceTheme = false;

	icons = {
		sun: SunDimIcon,
		moon: MoonIcon,
		system: MonitorCog
	}
}

// <lucide-icon name="monitor-cog"></lucide-icon>