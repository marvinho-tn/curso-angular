import { ElementRef, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TesteService {
    create(element: HTMLElement) {
        const novaDiv = document.createElement('div');

        novaDiv.textContent = 'Sou a nova div';
        novaDiv.classList.add('bg-red');

        element.appendChild(novaDiv);
    }
}