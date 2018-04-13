import { ElasticInputDirective } from './elastic-input.directive';
import { ElementRef } from '@angular/core';

describe('elastic-input', function() {
  beforeEach(function() {
    this.elementRef = {
      nativeElement: jasmine.createSpyObj('nativeElement', [''])
    };
    this.directive = new ElasticInputDirective(<ElementRef>this.elementRef);
  });

  describe('onInput', function() {
    it('calls update', function() {
      spyOn(this.directive, 'update');
      this.directive.onInput();
      expect(this.directive.update).toHaveBeenCalled();
    });
  });

  describe('ngAfterContentChecked', function() {
    it('calls update', function() {
      spyOn(this.directive, 'update');
      this.directive.ngAfterContentChecked();
      expect(this.directive.update).toHaveBeenCalled();
    });
  });

  describe('ngAfterViewChecked', function() {
    it('calls update', function() {
      spyOn(this.directive, 'update');
      this.directive.ngAfterViewChecked();
      expect(this.directive.update).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', function() {
    it('removes mirror and wrapper', function() {
      this.directive.mirror = jasmine.createSpyObj('mirror', ['remove']);
      this.directive.wrapper = jasmine.createSpyObj('wrapper', ['remove']);
      this.directive.ngOnDestroy();
      expect(this.directive.mirror.remove).toHaveBeenCalled();
      expect(this.directive.wrapper.remove).toHaveBeenCalled();
    });
  });

  describe('update', function() {
    it('sets native element value to mirror innerText', function() {
      this.elementRef.nativeElement.value = 'foo';
      this.elementRef.nativeElement.style = {
        width: '10px'
      };
      this.directive.mirror = {
        innerText: '',
        offsetWidth: 100
      };
      this.directive.update();
      expect(this.directive.mirror.innerText).toBe('foo');
      expect(this.elementRef.nativeElement.style.width).toBe('101px');
    });

    it('sets native element value to mirror innerText when placeholder', function() {
      this.elementRef.nativeElement.style = {
        width: '10px'
      };
      this.elementRef.nativeElement.placeholder = 'placeholder';
      this.directive.mirror = {
        innerText: '',
        offsetWidth: 100
      };
      this.directive.update();
      expect(this.directive.mirror.innerText).toBe('placeholder');
      expect(this.elementRef.nativeElement.style.width).toBe('101px');
    });

    it('avoids repaint when same value is reset', function() {
      this.elementRef.nativeElement.value = 'foo';
      this.elementRef.nativeElement.style = {
        width: '10px'
      };
      this.directive.mirror = {
        innerText: '',
        offsetWidth: 100
      };
      this.directive.update();
      expect(this.directive.mirror.innerText).toBe('foo');
      expect(this.elementRef.nativeElement.style.width).toBe('101px');
      this.elementRef.nativeElement.value = 'foo';
      this.directive.update();
      expect(this.elementRef.nativeElement.style.width).toBe('101px');
    });

    it('avoids repaint when same placeholder is reset', function() {
      this.elementRef.nativeElement.style = {
        width: '10px'
      };
      this.elementRef.nativeElement.placeholder = 'placeholder';
      this.directive.mirror = {
        innerText: '',
        offsetWidth: 100
      };
      this.directive.update();
      expect(this.directive.mirror.innerText).toBe('placeholder');
      expect(this.elementRef.nativeElement.style.width).toBe('101px');
      this.elementRef.nativeElement.placeholder = 'placeholder';
      this.directive.update();
      expect(this.elementRef.nativeElement.style.width).toBe('101px');
    });
  });
});
