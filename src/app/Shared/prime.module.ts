import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
    imports: [
        AccordionModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        InputTextareaModule,
        DropdownModule,
    ],
    exports: [
        AccordionModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        InputTextareaModule,
        DropdownModule,
    ],
})
export class PrimeModule { }
