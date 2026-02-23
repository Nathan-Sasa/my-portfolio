import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, BrushIcon, Grid2x2CheckIcon, UnplugIcon, RulerDimensionLineIcon, ChartColumnIcon } from 'lucide-angular';

@Component({
    selector: 'app-work',
    imports: [
      CommonModule,
	  LucideAngularModule
    ],
    templateUrl: './work.component.html',
    styleUrl: './work.component.css',
})
export class WorkComponent {

	icons = {
		brush: BrushIcon,
		gridCheck: Grid2x2CheckIcon,
		connect: UnplugIcon,
		rule: RulerDimensionLineIcon,
		chart: ChartColumnIcon
	}

	works = [
		{
			icon: this.icons.brush,
			title: 'Design',
			text: ''
		},
		{
			icon: this.icons.gridCheck,
			title: 'Refactorisation ia',
			text: ''
		},
		{
			icon: '',
			title: '',
			text: ''
		},
		{
			icon: '',
			title: 'Maintenance',
			text: ''
		},
		{
			icon: '',
			title: '',
			text: ''
		},
		{
			icon: '',
			title: '',
			text: ''
		},
	]
}
