import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-rules',
    standalone: true,
    imports: [],
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.css',
})
export class RulesComponent {
    @Input()
    ecranEtroit: boolean = false;

    @Output()
    retour: EventEmitter<any> = new EventEmitter(undefined);

    onRetour() {
        this.retour.emit(true);
    }
}
