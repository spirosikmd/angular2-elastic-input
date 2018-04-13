import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';

class ElasticInputDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
    }
    /**
     * @return {?}
     */
    onInput() {
        this.update();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.wrapper = document.createElement('div');
        this.wrapper.style.position = 'fixed';
        this.wrapper.style.top = '-999px';
        this.wrapper.style.left = '0';
        document.body.appendChild(this.wrapper);
        this.mirror = document.createElement('span');
        this.mirror.style.whiteSpace = 'pre';
        this.setMirrorStyle(this.mirror, this.element.nativeElement);
        this.wrapper.appendChild(this.mirror);
        this.update();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.update();
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.update();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.mirror.remove();
        this.wrapper.remove();
    }
    /**
     * @param {?} mirror
     * @param {?} element
     * @return {?}
     */
    setMirrorStyle(mirror, element) {
        const /** @type {?} */ style = window.getComputedStyle(element);
        [
            'fontFamily',
            'fontSize',
            'fontWeight',
            'fontStyle',
            'letterSpacing',
            'textTransform',
            'wordSpacing'
        ].forEach(value => {
            mirror.style[value] = style[value];
        });
        mirror.style.paddingLeft = style.textIndent;
        if (style.boxSizing === 'border-box') {
            [
                'paddingLeft',
                'paddingRight',
                'borderLeftStyle',
                'borderLeftWidth',
                'borderRightStyle',
                'borderRightWidth'
            ].forEach(value => {
                mirror.style[value] = style[value];
            });
        }
        else if (style.boxSizing === 'padding-box') {
            ['paddingLeft', 'paddingRight'].forEach(value => {
                mirror.style[value] = style[value];
            });
        }
    }
    /**
     * @return {?}
     */
    update() {
        const /** @type {?} */ domEl = this.element.nativeElement;
        const /** @type {?} */ value = domEl.value || domEl.placeholder;
        if (this.content != value) {
            this.content = value;
        }
        else {
            return;
        }
        this.mirror.innerText = value;
        const /** @type {?} */ delta = 1;
        domEl.style.width = `${this.mirror.offsetWidth + delta}px`;
    }
}
ElasticInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[elastic-input]'
            },] },
];
/**
 * @nocollapse
 */
ElasticInputDirective.ctorParameters = () => [
    { type: ElementRef, },
];
ElasticInputDirective.propDecorators = {
    'onInput': [{ type: HostListener, args: ['input', ['$event.target'],] },],
};

class ElasticInputModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ElasticInputModule
        };
    }
}
ElasticInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElasticInputDirective],
                exports: [ElasticInputDirective]
            },] },
];
/**
 * @nocollapse
 */
ElasticInputModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ElasticInputModule, ElasticInputDirective as ɵa };
//# sourceMappingURL=angular2-elastic-input.js.map
