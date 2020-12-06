import { Component } from '@angular/core';
import { SDKService } from '../../services/sdk.service';

@Component({
  selector: 'step-1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {
  public _isLoading = false;

  constructor(private readonly sdkService: SDKService) {}

  verifyWithSantander(): void {
    this._isLoading = true;

    this.sdkService.getRequestUri().subscribe((res) => {
      window.location.href = res.redirect_to;
    });
  }
}