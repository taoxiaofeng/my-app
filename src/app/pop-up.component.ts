import { Component, Input } from '@angular/core';


@Component({
	selector:'pop-up',
	templateUrl:'pop-up.component.html',
	styleUrls:['pop-up.component.css']
})

export class popUpComponent {
	private popUpShow:boolean = false;
}