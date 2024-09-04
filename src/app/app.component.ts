import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SphinxComponent } from './sphinx/sphinx.component';

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

    constructor(private responsiveService: BreakpointObserver) { }

    ngOnInit(): void {
        this.responsiveService
            .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
            .subscribe((result) => {
                this.ecranEtroit = result.breakpoints[Breakpoints.XSmall] || result.breakpoints[Breakpoints.Small];
            });
    }

    @HostListener('document:contextmenu', ['$event'])
    onRightClick(event: any) {
        event.preventDefault();
    }

    affichageRegles(doitAfficher: boolean) {
        this.displayRules = doitAfficher;
    }
}
