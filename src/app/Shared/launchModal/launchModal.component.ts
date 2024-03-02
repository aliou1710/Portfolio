import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { FormServiceInfo } from 'src/app/models/interface'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalComponent } from '../../Shared/modal/modal.component'

@Component({
	selector: 'app-launch-modal',
	templateUrl: './launchModal.component.html',
	styleUrls: ['./launchModal.component.css'],
})
export class LaunchModalComponent {
	@Input() itemLaunch: FormServiceInfo

	constructor(private modalService: NgbModal) {}
	public open(launchId: any) {
		console.log(launchId)
	}

	getColorClass(color: string): any {
		switch (color) {
			case 'primary':
				return 'bg-primary'
			case 'secondary':
				return 'bg-secondary'
			case 'success':
				return 'bg-success'
			case 'danger':
				return 'bg-danger'
			case 'warning':
				return 'bg-warning'
			case 'info':
				return 'bg-info'
			case 'light':
				return 'bg-light'
			case 'dark':
				return 'bg-dark'
			default:
				return '' // Aucune classe par défaut
		}
	}

	ShowInfo() {
		const modalRef = this.modalService.open(ModalComponent, { scrollable: false, size: 'lg' })
		modalRef.componentInstance.title = this.itemLaunch.title
		modalRef.componentInstance.contentBody = this.itemLaunch.contentBody
		modalRef.result.then(() => {})
	}
}
