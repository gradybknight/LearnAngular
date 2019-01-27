import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalID:string;
  constructor( ref: ElementRef,  @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }
 
  ngOnInit() {
    this.el.addEventListener('click', event => {
      this.$(`#${this.modalID}`).modal({})
    })
 }
}