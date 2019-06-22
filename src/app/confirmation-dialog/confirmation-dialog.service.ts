import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal) { }

  confirm(title: string, message: string,btnOkText: string = 'OK',btnCancelText: string = 'Cancel',
                  dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {

                    console.log("Hiiii");
    const modalRef = this.modalService.open(ConfirmationDialogComponent);

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    console.log("Hiiii");
    return modalRef.result;
  }
}
