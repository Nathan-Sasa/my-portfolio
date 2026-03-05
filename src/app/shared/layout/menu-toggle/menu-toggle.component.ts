import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from '../theme/theme.component';

@Component({
	selector: 'app-menu-toggle',
	imports: [
		CommonModule,
		RouterModule,
		ThemeComponent
	],
	templateUrl: './menu-toggle.component.html',
	styleUrl: './menu-toggle.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuToggleComponent {

	@Input() isOpen = false
	@Output() closed = new EventEmitter<void>()

	close(){
		this.closed.emit()
	}

	@HostListener('window:scroll')
	scroll():void{
		if(window.scrollY){
			this.close()
		}
	}
}
