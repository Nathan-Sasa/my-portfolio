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

    lastScroll = 0
    navbarVisible = true
    scrollThreshold = 10

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen
    }

    closeMenu(): void{
        this.isMenuOpen = false
    }

    @HostListener('window:scroll', [])
    onScroll(){
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop

        if(Math.abs(currentScroll - this.lastScroll) < this.scrollThreshold) {
            return
        }

        if(currentScroll > this.lastScroll && currentScroll > 320){
            this.navbarVisible = false
        } else {
            this.navbarVisible = true
        }

        this.lastScroll = currentScroll
    }

}
