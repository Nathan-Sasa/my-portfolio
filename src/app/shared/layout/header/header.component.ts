import { CommonModule } from '@angular/common';
import { Component, HostListener, ChangeDetectionStrategy, Input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from '../theme/theme.component';
import { LucideAngularModule } from 'lucide-angular';
import { MenuToggleComponent } from '../menu-toggle/menu-toggle.component';
import { ViewOnScrollTop } from '../../directive/viewOnScrollTop.directive';

@Component({
    selector: 'app-header',
    imports: [
        RouterModule,
        CommonModule,
        ThemeComponent,
        LucideAngularModule,
        MenuToggleComponent,
        ViewOnScrollTop
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    app = {
        name: 'athanDev',
        logo: 'assets/img/logo/nathan-logo.webp'
    }

    @Input() name = signal({name: this.app.name})

    isMenuOpen = false

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen
    }

    closeMenu(): void{
        this.isMenuOpen = false
    }

}
