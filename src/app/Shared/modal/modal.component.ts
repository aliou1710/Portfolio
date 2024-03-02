import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
	selector: 'app-modal',
	templateUrl: `./modal.component.html`,
	styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
	@Input() title: string
	@Input() contentBody: string
	constructor(public activeModal: NgbActiveModal) {}

	closeModal() {
		this.activeModal.close('close modal')
	}
}
