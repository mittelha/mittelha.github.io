import { Injectable } from '@angular/core';

interface FAQ {
    question: string,
    reponse: string
}

@Injectable({
    providedIn: 'root'
})
export class FaqService {
    private d: string = 'W3sNCgkicXVlc3Rpb24iOiAiOGYxOTM3OTkwNjA0ZTc0OGIwNmE3ZmQyZTNmYjRmOWEiLA0KCSJyZXBvbnNlIjogInIiDQp9LCB7DQoJInF1ZXN0aW9uIjogIjkzZGQ5MTJiMjM3YmFjMjQxOTlmNzUyNzFlNGUyYzk5IiwNCgkicmVwb25zZSI6ICJnIg0KfSwgew0KCSJxdWVzdGlvbiI6ICIwYjU3YWQxYjFlMGM4OTllMjI5OTQ4Y2M1N2Q1NjQwNCIsDQoJInJlcG9uc2UiOiAidCINCn0sIHsNCgkicXVlc3Rpb24iOiAiZWY1ZDZkY2ZlMzIyNDhmZjAxMGM5MGEwNGQyMmQ5ZmYiLA0KCSJyZXBvbnNlIjogImEiDQp9LCB7DQoJInF1ZXN0aW9uIjogIjU0ZDlhYmZiZDc3ZmI3YzYyZWU4MjU5M2I3MGYzNzMxIiwNCgkicmVwb25zZSI6ICJleGN1c2VzIg0KfV0=';
    private b: FAQ[] = [];

    constructor() {
        this.b = JSON.parse(atob(this.d)) as FAQ[];
    }

    public getR(q: string): FAQ | undefined {
        return this.b.find(o => o.question === q);
    }
}
