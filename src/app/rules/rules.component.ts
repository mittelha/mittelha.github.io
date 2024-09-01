import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-rules',
    standalone: true,
    imports: [],
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.css',
})
export class RulesComponent {
    @Output()
    retour: EventEmitter<any> = new EventEmitter(undefined);

    onRetour() {
        this.retour.emit(true);
    }
}
