/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Md5 } from 'ts-md5';

export const read = (str: string) => '' + new Md5().appendStr(str).end();

export const simpler = (str: string) =>
    str
        .trim()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toUpperCase();

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

(window as any)['correspondance7'] = (str: string) =>
    AppComponent.correspondance7(str);
