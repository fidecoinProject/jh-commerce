import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { JhcommerceSharedLibsModule, JhcommerceSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [JhcommerceSharedLibsModule, JhcommerceSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [JhcommerceSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhcommerceSharedModule {
    static forRoot() {
        return {
            ngModule: JhcommerceSharedModule
        };
    }
}
