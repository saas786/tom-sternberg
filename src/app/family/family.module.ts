import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FamilyRoutingModule } from './family-routing.module';
import { FamilyComponent } from './family.component';
import { PicturesComponent } from './pictures/pictures.component';
import { PictureService } from './services/picture.service';

@NgModule({
    imports: [CommonModule, FormsModule, SharedModule, FamilyRoutingModule],
    declarations: [FamilyComponent, PicturesComponent],
})
export class FamilyModule {}
