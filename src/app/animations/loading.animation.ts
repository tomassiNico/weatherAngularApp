import { trigger, style, animate, query, stagger, transition } from '@angular/animations';

export let loadingAnimation = function(){
    return trigger('loading',[
        transition('* => *',[
            query(':leave',[
                stagger(100,[
                    animate('500ms',style({opacity:0}))
                ])
            ],{optional:true}),
            query(':enter',[
                style({opacity:0}),
                stagger(100,[
                    animate('500ms',style({opacity:1}))
                ])
            ],{optional:true})
        ])
    ]);
}