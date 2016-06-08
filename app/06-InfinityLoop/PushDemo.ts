/**
 * Created by Eyal on 4/12/2016.
 */
import {ChangeDetectorRef, ChangeDetectionStrategy,
    Component, NgZone, Renderer, ElementRef} from "@angular/core";
import {BaseDemo} from "./BaseDemo";
import {Global} from "ngEx/Global";
import {DoCheckComp} from "./do-check.cmp";
import {TimerComp} from "./timer.cmp";

@Global()
@Component({
    selector:'push-demo',
    directives:[DoCheckComp,TimerComp],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles:[`
:host{display: block;text-align: left;margin: 8px;} 
.border{border: 1px solid black; padding: 8px;}`],
    template:`
    <div class="border">
        <do-check [name]="name"></do-check>
        <h3>Push Demo</h3>
        Test: <input type="text" [(ngModel)]="test"> {{test}} <br>
        Name: {{name}} <br>
        User Name : {{user.name}} <br>
        <button (click)="changeName()">Change</button>
        <button (click)="detach()">Detach</button>
        <button (click)="reattach()">Reattach</button>
        <button (click)="detectChanges()">detectChanges</button>
        <button (click)="markForCheck()">markForCheck</button>        
       <!-- <timer></timer>-->        
    </div>
`
})
export class PushDemo extends BaseDemo{
    constructor( cd:ChangeDetectorRef,
                 elmRef:ElementRef,
                 render: Renderer,
                 zone: NgZone){
        super(cd,elmRef,render,zone,'PushDemo');
    }
}