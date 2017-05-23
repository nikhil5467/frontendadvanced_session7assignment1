import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

const template: string = require('./interpolation.component.html');

@Component({
    selector: 'connector',
    template: '<ul><li *ngFor="let user of users">
	            {{user.name}} {{user.dob <=27}}
	</ul> 
	
	<div><span>{{user.name}}</span>
<span>{{user.name}}</span>
<span  [style.background]="'lime'">{{user.name}}</span>
<span>{{user.name}}</span>
<span>{{user.name}}</span>	</div>
	
	'
    directives: [ROUTER_DIRECTIVES]
})

export class InterPolationComponent implements OnInit {
    users: any = [];

    constructor() {
        this.users = [
            {
                "name": "Mike John",
                "dob": "27 Sept 1950"
            },
            {
                "name": "Tim Cook",
                "dob": "2 Aug 1975"
            },
			 {
                "name": "Mike John",
                "dob": "27 Sept 1950"
            },
            {
                "name": "Tim Cook",
                "dob": "2 Aug 1975"
            },
			 {
                "name": "Mike John",
                "dob": "27 Sept 1950"
            },
            {
                "name": "Tim Cook",
                "dob": "2 Aug 1975"
            }
        ];
    }

    /**
     * [ngOnInit Loading initial configuration]
    */
    ngOnInit() {
        
    }
}
