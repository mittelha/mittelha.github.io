import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-sphinx',
    standalone: true,
    imports: [
        CommonModule, FormsModule
    ],
    templateUrl: './sphinx.component.html',
    styleUrl: './sphinx.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SphinxComponent {
    @Input()
    ecranEtroit: boolean = false;

    question: string = '';
    reponse: string = '';

    @HostListener('document:keyup', ['$event'])
    onKeyUp(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.verifierQuestion();
        }
    }

    verifierQuestion() {
        if (this.question) {
            const test = this.question
                .normalize('NFD')
                .replace(/\p{Diacritic}/gu, '')
                .toUpperCase();
            switch (test) {
                case 'BAYONNE':
                    this.reponse = '/r.jpg';
                    break;
                case 'GIBERT':
                    this.reponse = '/g.jpg';
                    break;
                case 'TECH':
                    this.reponse = '/t.jpg';
                    break;
                case 'AMOUR':
                    this.reponse = '/a.jpg';
                    break;
                default:
                    const i = Math.floor(Math.random() * 6) + 1;
                    this.reponse = `/no${i}.gif`;
                    break;
            }
        }
    }
}
