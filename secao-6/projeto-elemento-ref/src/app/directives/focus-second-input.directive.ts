import { AfterViewInit, Directive, ElementRef, HostBinding, input, OnInit } from "@angular/core";

@Directive({
    selector: '[appFocusSecondInput]'
})
export class FocusSecondInputDirective implements OnInit, AfterViewInit {
    @HostBinding('style.background-color')
    bgColor: string = 'blue';

    // @HostBinding('textContent')
    // text: string = 'Sou uma div';

    constructor(private readonly _elRef: ElementRef<HTMLDivElement>) { }
    
    ngAfterViewInit(): void {
        const inputList = this._elRef.nativeElement.querySelectorAll("input");

        if (inputList.length > 1) {
            inputList[1].focus();
        }
    }

    ngOnInit(): void {
        // console.log(this._elRef);

        // const inputList = this._elRef.nativeElement.querySelectorAll("input");

        // console.log(inputList);

        // if (inputList.length > 1) {
        //     const input2 = inputList[1];

        //     input2.focus();
        // }
    }
}