import { Component } from '@angular/core'
import { FormServiceDefinition } from '../models/class'
import { FormServiceInfo, FormServiceInfoDictionary } from '../models/interface'

@Component({
	selector: 'app-service',
	templateUrl: './service.component.html',
	styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
	public title_ = 'azaa'
	public modalbody_ = 'poto'
	constructor() {}
	public listLaunchService: FormServiceInfoDictionary = {
		0: {
			title: 'SERVICES.PROJECTS.PROJECT0.TITLE',
			modalbody: 'SERVICES.PROJECTS.PROJECT0.MODALBODY',
			contentBody: null,
			color: 'danger',
		},
		1: {
			title: 'SERVICES.PROJECTS.PROJECT1.TITLE',
			modalbody: 'SERVICES.PROJECTS.PROJECT1.MODALBODY',
			contentBody: null,
			color: 'warning',
		},
		2: {
			title: 'SERVICES.PROJECTS.PROJECT2.TITLE',
			modalbody: 'SERVICES.PROJECTS.PROJECT2.MODALBODY',
			contentBody: null,
			color: 'success',
		},
		3: {
			title: 'SERVICES.PROJECTS.PROJECT3.TITLE',
			modalbody: 'SERVICES.PROJECTS.PROJECT3.MODALBODY',
			contentBody: null,
			color: 'info',
		},
		4: {
			title: 'SERVICES.PROJECTS.PROJECT4.TITLE',
			modalbody: 'SERVICES.PROJECTS.PROJECT4.MODALBODY',
			contentBody: null,
			color: 'light',
		},
		5: {
			title: 'SERVICES.PROJECTS.PROJECT5.TITLE',
			modalbody: 'SERVICES.PROJECTS.PROJECT5.MODALBODY',
			contentBody: null,
			color: 'warning',
		},
		6: {
			title: 'SERVICES.PROJECTS.PROJECT6.TITLE',
			modalbody: 'SERVICES.PROJECTS.PROJECT6.MODALBODY',
			contentBody: null,
			color: 'secondary',
		},
		7: {
			title: 'SERVICES.PROJECTS.PROJECT7.TITLE',
			modalbody: 'SERVICES.PROJECTS.PROJECT7.MODALBODY',
			contentBody: null,
			color: 'success',
		},
		8: {
			title: 'SERVICES.PROJECTS.PROJECT8.TITLE',
			modalbody: 'SERVICES.PROJECTS.PROJECT8.MODALBODY',
			contentBody: null,
			color: 'danger',
		},
	}

	getObjectValues(obj: FormServiceInfoDictionary): FormServiceInfo[] {
		return Object.values(obj)
	}
}
