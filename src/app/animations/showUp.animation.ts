import { trigger, transition, state, style, animate, query, stagger } from '@angular/animations';

export let showUpStaggered = trigger('showUpCollection', [
    transition('* => *', [
        query(':enter', [
            style({opacity: 0, transform: 'scale(0)'}),
            stagger(50,[
                animate(300, style({opacity: 1, transform: 'scale(1)'}))
            ])
            
        ], {optional:true})
    ])
]);

export let showUp = trigger('showUpElement', [
    state('in', style({opacity: 1, transform: 'scale(1)'})),
    transition(':enter',[
        style({opacity: 0, transform: 'scale(0)'}),
        animate(250)
    ])

]);