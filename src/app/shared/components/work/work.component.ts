import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, BrushIcon, Grid2x2CheckIcon, UnplugIcon, RulerDimensionLineIcon, ChartColumnIcon, SearchCodeIcon, LoaderIcon, DatabaseZapIcon } from 'lucide-angular';
import { ScrollAnimDirective } from '../../directive/scroll-anim.directive';
import { ParallaxDirective } from '../../directive/parallax.directive';

@Component({
    selector: 'app-work',
    imports: [
		CommonModule,
		LucideAngularModule,
		ScrollAnimDirective,
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
		chart: ChartColumnIcon,
		searchCode: SearchCodeIcon,
		loader: LoaderIcon,
		data: DatabaseZapIcon
	}

	works = [
		{
			icon: this.icons.brush,
			title: "Conception d'interface",
			text: "Construire de structures, styles et interactivité, assurant l'adptatabilité des sites et applications à tous les écrans et appareils. Et diriger l'utilisateur vers son but."
		},
		{
			icon: this.icons.searchCode,
			title: 'Refactorisation',
			text: "Améliorer de la qualité du code existant ou généré par l'intelligence artificiel, en réorganisant et en simplifiant les structures existantes pour améliorer la lisibilité, la maintenabilité et la performance des projets."
		},
		{
			icon: this.icons.loader,
			title: 'Optimisation SEO',
			text: 'Optimiser des ressources, la gestion du cache et le respect des normes pour que votre site soit rapide à charger et bien classé sur les moteurs de recherche'
		},
		{
			icon: this.icons.connect,
			title: 'Collaboration',
			text: 'Collaborer avec les équipes de développement, design et marketing pour garantir la qualité et l’efficacité des projets.'
		},
		{
			icon: this.icons.data,
			title: 'Données',
			text: "Assurer que les utilisateurs puissent facilement trouver les informations dont ils ont besoin, et que les données soient présentées de manière claire et compréhensible."
		},
		{
			icon: this.icons.chart,
			title: 'Statistiques',
			text: 'Augmenter le prospective de mes clients en apportant de solutions digitales innovantes et efficaces qui impact positivement leur activité et leur croissance.'
		},
	]
}
