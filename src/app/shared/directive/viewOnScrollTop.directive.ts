import { Directive, HostListener, ElementRef } from '@angular/core'

@Directive({
    selector: '[appViewOnScrollTop]'
})

export class ViewOnScrollTop {

    private el: HTMLElement;
    constructor(
        ref: ElementRef<HTMLElement>
    ) {
        this.el = ref.nativeElement
    }
    scrollValue = 0

    // @HostListener('window:scroll')
    // onScroll(): void {
    //     if(window.screenY > this.scrollValue){
    //         this.el.style.top = '-64px'
    //         // console.log('descente')
    //         // console.log('scrollValue', this.scrollValue)
    //     } else {
    //         this.el.style.top = '16px'
    //         // console.log('montee')
    //         // console.log('scrollValue', this.scrollValue)
    //     }
    //     console.log( 'Window scroll ',window.scrollY)
    //     // console.log('scrollValue', this.scrollValue)
    //     this.scrollValue = window.scrollY
    // }
}