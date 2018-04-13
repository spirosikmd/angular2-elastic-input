import { ElementRef, OnInit } from '@angular/core';
export declare class ElasticInputDirective implements OnInit {
    private element;
    wrapper: HTMLElement;
    mirror: HTMLElement;
    content: any;
    onInput(): void;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    setMirrorStyle(mirror: HTMLElement, element: HTMLElement): void;
    update(): void;
}
