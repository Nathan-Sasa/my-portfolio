import { Directive, ElementRef, HostListener, Input } from '@angular/core';

type AnimType =
	| 'fade'
	| 'fadeBt'
	| 'scale'
	| 'slide-up'
	| 'blur'
	| 'blurTop'
	| 'blurProject'
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
		const o = this.OProgress()
		const btP = this.FBProgress()
		const bt = this.BTProgress()
		const pr = this.PrProgress()

		this.apply(p, o, bt, pr, btP)
		// console.log(this.progress())
	}

	// propriété pour tous les elements position top -- 
	private progress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight
		return this.clamp(1 - rect.top / vh, 0, 1)
	}
	// propriéré pour l'opacition à 1 dès le 1/4 de l'ecran
	private FBProgress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight
		return this.clamp(1 - rect.top / vh, 0, 1)
	}

	// propriété pour les element apparaissant completement au milieu de l'ecran
	private BTProgress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight
		return this.clamp(1.5 - rect.top / vh, 0, 1)
	}

	// propriéré pour l'opacition à 1 au milieu de l'ecran
	private OProgress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight
		return this.clamp(0.9 - rect.top / vh, 0, 1)
	}

	// project blur : l'effet blur s'arret au premier quart de l'ecran avec un effect scale
	private PrProgress(): number {
		const rect = this.el.getBoundingClientRect()
		const vh = window.innerHeight

		const raw = 1.6 - rect.top / vh

		return this.clamp(raw, 0, 1)
	}

	// ===================================

	private apply(p: number, o: number, bt: number, pr: number, btP: number): void{
		switch(this.animType){
			case 'fade':
				this.el.style.opacity = o.toString()
				break;

			case 'fadeBt':
				this.el.style.opacity = btP.toString()
				break;

			case 'scale':
				this.el.style.transform = `scale(${this.map(p, 0, 1, 0.8, 1.2)})`
				break;

			case 'slide-up':
				this.el.style.transform = `translateY(${this.map(p, 0, 1, 60, 0)}px)`
				break;

			case 'blur':
				this.el.style.filter = `blur(${this.map(bt, 0, 1, 8, 0)}px)`
				break;

			case 'blurTop':
				this.el.style.filter = `blur(${this.map(p, 0, 1, 8, 0)}px)`
				break;

			case 'blurProject':
				const y = 60 * (1 - pr)
				this.el.style.filter = `blur(${this.map(pr, 0, 1, 8, 0)}px)`
				this.el.style.transform = `translateY(${y}px) scale(${0.9 + bt * 0.1})`
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
