import { Directive, Input, ElementRef, HostListener } from '@angular/core';

type Direction = 'up' | 'left' | 'right' | 'down' | 'upScale'

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

	@Input() direction: Direction = 'up'

	@Input() speed: number = 0.3
	private el: HTMLElement

	constructor(
		ref: ElementRef<HTMLElement>
	) {
		this.el = ref.nativeElement
	}

	@HostListener('window:scroll')
	onScroll(): void {
		// console.log(window.scrollY)
		this.applyParallax(window.scrollY)
	}

	private applyParallax(scrollY: number): void {

		// if(scrollY >= 1500){
		// 	this.el.style.display = 'none'
		// }else{
		// 	this.el.style.display = 'flex'
		// }

		const y = scrollY * this.speed
		let sy = 1
		// console.log('scroll : ', Math.floor(scrollY))
		

		if(scrollY >= 100){
			sy += Number(`0.${Math.floor(scrollY)}`)
			if(scrollY >= 999){
				sy = Number(`1.9969999999999999`)
			}
		} else{
			sy = 1
		}

		console.log('sy : ', sy)

		switch(this.direction){
			case 'up':
				this.el.style.transform = `translate3d(0, ${y}px, 0)`
				break;
			case 'left':
				this.el.style.transform = `translate3d(${-y}px, 0, 0)`
				break;
			case 'right':
				this.el.style.transform = `translate3d(${y}px, 0, 0)`
				break;
			case 'down':
				this.el.style.transform = `translateY(${-y}px)`
				break;
			case 'upScale':
				this.el.style.transform = `translate3d(0, ${y}px, 0) scale(${sy})`
		}

		// console.log(sy)
	}

}
