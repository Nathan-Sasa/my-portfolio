import { Directive, ElementRef, Input, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextWriter]'
})
export class TextWriterDirective implements AfterViewInit {

	@Input() words: string[] = []
	
	// vitesse d'écriture et supression
	@Input() typeSpeed = 120
	@Input() deleteSpeed = 70
	// @Input() period: number = 2000

	// pause
	@Input() wordDelay = 1500
	@Input() betweenDelay = 500
	
	@Input() pauseOnHover = true
	

	private txt = ''
	private loopNum = 0
	private isDeleting = false
	private paused = false

	constructor(
		private el: ElementRef<HTMLElement>
	) { }


	ngAfterViewInit(): void {
		if(this.words.length > 0){
			this.tick()
		}
	}

	@HostListener('mouseenter')
	onEnter(){
		if(this.pauseOnHover) this.paused = true
	}

	@HostListener('mouseleave')
	onLeave(){
		if(this.pauseOnHover){
			this.paused = false
			this.tick()
		}
	}


	private tick(): void{
		if(this.paused) return

		const i = this.loopNum % this.words.length
		const fullTxt = this.words[i]

		this.txt = this.isDeleting
			? fullTxt.substring(0, this.txt.length - 1)
			: fullTxt.substring(0, this.txt.length + 1)
		
		this.el.nativeElement.innerHTML = `<span class="wrap">${this.txt}</span>`

		let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed

		if(!this.isDeleting && this.txt === fullTxt){
			delay = this.wordDelay
			this.isDeleting = true

		}else if(this.isDeleting && this.txt === ''){
			this.isDeleting = false
			this.loopNum++
			delay = this.betweenDelay
		}

		setTimeout(() => this.tick(), delay)





		// let delta = 2 - Math.random() * 100
		// if(this.isDeleting) delta /=2

		// if(!this.isDeleting && this.txt === fullTxt){
		// 	delta = this.period
		// 	this.isDeleting = true

		// }else if(this.isDeleting && this.txt === ''){
		// 	this.isDeleting = false
		// 	this.loopNum++
		// 	delta = 500
		// }

		// setTimeout(() => this.tick(), delta)
	}
}
