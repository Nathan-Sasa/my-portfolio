import { Directive, ElementRef, HostListener, Input } from '@angular/core';

type AnimType =
	| 'fade'
	| 'scale'
	| 'slide-up'
	| 'blur'
	| 'rotate'
	| 'combo'

@Directive({
  selector: '[appScrollAnim]'
})
export class ScrollAnimDirective {

	@Input() animType: AnimType = 'fade';
	@Input() rotateDeg: number  = -10
	private el: HTMLElement;

	constructor(
		ref: ElementRef<HTMLElement>
	) { 
		this.el = ref.nativeElement
	}

	@HostListener('window:scroll')
	onScroll(): void{
		const p = this.progress()
		this.apply(p)
	}

	private progress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight
		return this.clamp(1 - rect.top / vh, 0, 1)
	}

	private apply(p: number): void{
		switch(this.animType){
			case 'fade':
				this.el.style.opacity = p.toString()
				break;
			case 'scale':
				this.el.style.transform = `scale(${this.map(p, 0, 1, 0.8, 1.2)})`
				break;
			case 'slide-up':
				this.el.style.transform = `translateY(${this.map(p, 0, 1, 60, 0)}px)`
				break;
			case 'blur':
				this.el.style.filter = `blur(${this.map(p, 0, 1, 8, 0)}px)`
				break;
			case 'rotate':
				this.el.style.transform = `rotate(${this.map(p, 0, 1, this.rotateDeg, 0)}deg)`
				break;
			case 'combo':
				// this.el.style.opacity = p.toString()
				this.el.style.filter = `blur(${this.map(p, 0, 1, 8, 0)}px)`
				this.el.style.transform =
					`translateY(${this.map(p, 0, 1, 40, 0)}px)
					scale(${this.map(p, 0, 1, 0.9, 1)})`
					break;
		}
	}

	private map(
		v: number,
		inMin: number,
		inMax: number,
		outMin: number,
		outMax: number
	): number{
		return (v - inMin) * (outMax - outMin)
			/ (inMax - inMin) + outMin
	}

	private clamp(v: number, min: number, max: number) : number {
		return Math.max(min, Math.min(max, v))
	}

}
