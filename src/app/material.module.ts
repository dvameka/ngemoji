import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter'
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';





const MATERIAL = [
    MatButtonModule, 
    MatIconModule, 
    MatInputModule, 
    MatCheckboxModule, 
    MatRadioModule, 
    MatFormFieldModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatDatepickerModule, 
    MatMomentDateModule, 
    MatSliderModule, 
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
];

@NgModule ({
    imports: MATERIAL,
    exports: MATERIAL
})

export class MaterialModule { }