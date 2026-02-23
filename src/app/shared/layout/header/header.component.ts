import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeComponent } from '../theme/theme.component';

@Component({
    selector: 'app-header',
    imports: [
        RouterModule,
        CommonModule,
        ThemeComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    app = {
        name: 'athanDev',
        logo: 'assets/img/logo/nathan-logo.webp'
    }
}
