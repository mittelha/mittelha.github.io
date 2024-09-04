import { Injectable } from '@angular/core';

interface FAQ {
    question: string,
    reponse: string
}

@Injectable({
    providedIn: 'root'
})
export class FaqService {
    private d: string = 'W3sKCSJxdWVzdGlvbiI6ICI4ZjE5Mzc5OTA2MDRlNzQ4YjA2YTdmZDJlM2ZiNGY5YSIsCgkicmVwb25zZSI6ICJyIgp9LCB7CgkicXVlc3Rpb24iOiAiOTNkZDkxMmIyMzdiYWMyNDE5OWY3NTI3MWU0ZTJjOTkiLAoJInJlcG9uc2UiOiAiZyIKfSwgewoJInF1ZXN0aW9uIjogIjBiNTdhZDFiMWUwYzg5OWUyMjk5NDhjYzU3ZDU2NDA0IiwKCSJyZXBvbnNlIjogInQiCn0sIHsKCSJxdWVzdGlvbiI6ICJlZjVkNmRjZmUzMjI0OGZmMDEwYzkwYTA0ZDIyZDlmZiIsCgkicmVwb25zZSI6ICJhIgp9XQ==';
    private b: FAQ[] = [];

    constructor() {
        this.b = JSON.parse(atob(this.d)) as FAQ[];
    }

    public getR(q: string): FAQ | undefined {
        return this.b.find(o => o.question === q);
    }
}
