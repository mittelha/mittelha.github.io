/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
);

document.onkeydown = (event: KeyboardEvent) => {
    if (
        event.key === 'PrintScreen' ||
        event.key === 'F12' ||
        (event.ctrlKey &&
            event.shiftKey &&
            (event.key === 'I' || event.key === 'J'))
    ) {
        event.preventDefault();
        return false;
    }
    return true;
};
