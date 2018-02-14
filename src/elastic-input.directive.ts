import {ElementRef, HostListener, Directive, OnInit} from '@angular/core';

@Directive({
  selector: 'input[elastic-input]'
})
export class ElasticInputDirective implements OnInit {
  wrapper: HTMLElement;
  mirror: HTMLElement;

  @HostListener('input', ['$event.target'])

  onInput (): void {
    this.update();
  }

  constructor (private element: ElementRef) {
  }

  ngOnInit (): void {
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

  ngAfterContentChecked (): void {
    this.update();
  }

  ngAfterViewChecked() {
    this.update();
  }

  ngOnDestroy (): void {
    this.mirror.remove();
    this.wrapper.remove();
  }

  setMirrorStyle (mirror: HTMLElement, element: HTMLElement) {
    const style = window.getComputedStyle(element);

    ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle',
      'letterSpacing', 'textTransform', 'wordSpacing'].forEach(
      (value) => {
        mirror.style[value] = style[value];
      });

    mirror.style.paddingLeft = style.textIndent;

    if (style.boxSizing === 'border-box') {
      ['paddingLeft', 'paddingRight', 'borderLeftStyle', 'borderLeftWidth',
        'borderRightStyle', 'borderRightWidth'].forEach((value) => {
        mirror.style[value] = style[value];
      });
    } else if (style.boxSizing === 'padding-box') {
      ['paddingLeft', 'paddingRight'].forEach((value) => {
        mirror.style[value] = style[value];
      });
    }
  }

  update () {
    const domEl = this.element.nativeElement;
    this.mirror.innerText = domEl.value || domEl.placeholder;
    const delta = 1;
    domEl.style.width = `${this.mirror.offsetWidth + delta}px`;
  }
}
