import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[appListener]',
})
export class ListenerDirective {
    @HostListener('click')
    onClick() {
        console.log('clicou');
    }

    @HostListener('keyup', ['$event'])
    onKeyUp(event: Event) {
        const input = event.target as HTMLInputElement;

        // console.log('digitou');
        console.log(input.value);
    }
}