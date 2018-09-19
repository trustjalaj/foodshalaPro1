import { NgModule } from '@angular/core';

import { FoodShalaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FoodShalaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FoodShalaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FoodShalaSharedCommonModule {}
