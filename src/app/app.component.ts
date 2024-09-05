import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SphinxComponent } from './sphinx/sphinx.component';
import { simpler } from '../main';

interface CapV {
    v: string;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RulesComponent, SphinxComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    displayRules: boolean = false;
    ecranEtroit: boolean = false;

    private static d: string =
        'W3sNCgkidiI6ICJIT05ORVRFVEUiDQp9LCB7DQoJInYiOiAiQVVEQUNFIg0KfSwgew0KCSJ2IjogIkNPTkZJQU5DRSINCn0sIHsNCgkidiI6ICJMSUJFUlRFIg0KfSwgew0KCSJ2IjogIlBMQUlTSVIiDQp9LCB7DQoJInYiOiAiU0lNUExJQ0lURSINCn0sIHsNCgkidiI6ICJTT0xJREFSSVRFIg0KfV0=';
    private static c: CapV[] = JSON.parse(atob(AppComponent.d)) as CapV[];

    constructor(private responsiveService: BreakpointObserver) {}

    ngOnInit(): void {
        this.responsiveService
            .observe([
                Breakpoints.XSmall,
                Breakpoints.Small,
                Breakpoints.Medium,
                Breakpoints.Large,
                Breakpoints.XLarge,
            ])
            .subscribe((result) => {
                this.ecranEtroit =
                    result.breakpoints[Breakpoints.XSmall] ||
                    result.breakpoints[Breakpoints.Small];
            });
    }

    @HostListener('document:contextmenu', ['$event'])
    onRightClick(event: any) {
        event.preventDefault();
    }

    affichageRegles(doitAfficher: boolean) {
        this.displayRules = doitAfficher;
    }

    public static correspondance7(
        lettre_chiffre: string
    ): string[] | undefined {
        if (lettre_chiffre?.length == 2) {
            const c = AppComponent.c.filter(
                (cv) => cv.v.charAt(0) === lettre_chiffre.charAt(0)
            );
            if (c?.length) {
                return c.map((cv) =>
                    cv.v.charAt(Number.parseInt(lettre_chiffre.charAt(1)))
                );
            }
        }
        console.error('Je ne sais pas décoder cela.');
        return undefined;
    }
}
