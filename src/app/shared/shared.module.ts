import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { PlaceSuffixPipe } from './pipes/place-suffix.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { DatetimePickerComponent } from './components/datetime-picker/datetime-picker.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from './components/ngb-modal/ngb-modal.component';
import { NgbdVideoModalComponent } from './components/ngb-video-modal/ngb-video-modal.component';
import { NgbdTranscludeModalComponent } from './components/ngb-transclude-modal/ngb-transclude-modal.component';
import { CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';
import { DefaultPicturePipe } from './pipes/default-picture.pipe';
import { FilterPipe } from './pipes/filter-pipe';
import { NgbdPictureModalComponent } from './components/ngb-picture-modal/ngb-picture-modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule, MDBBootstrapModule.forRoot()],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    DatetimePickerComponent,
    NgbdModalComponent,
    NgbdVideoModalComponent,
    NgbdTranscludeModalComponent,
    NgbdPictureModalComponent,
    CustomTooltipComponent,
    // pipes
    PlaceSuffixPipe,
    DefaultPicturePipe,
    SafePipe,
    FilterPipe
  ],
  exports: [DatetimePickerComponent, CustomTooltipComponent, DefaultPicturePipe, SafePipe, FilterPipe],
  entryComponents: [NgbdModalComponent, CustomTooltipComponent, NgbdVideoModalComponent, NgbdTranscludeModalComponent, NgbdPictureModalComponent]
})
export class SharedModule {}
