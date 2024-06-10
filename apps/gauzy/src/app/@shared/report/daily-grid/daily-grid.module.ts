import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
	NbIconModule,
	NbSpinnerModule,
	NbCardModule,
	NbSelectModule,
	NbAccordionModule,
	NbBadgeModule
} from '@nebular/theme';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { TableComponentsModule } from '@gauzy/ui-sdk/shared';
import { SharedModule } from '../../shared.module';
import { DailyGridComponent } from './daily-grid.component';
import { ProjectColumnViewModule } from '../project-column-view/project-column-view.module';
import { NoDataMessageModule } from '../../no-data-message/no-data-message.module';

@NgModule({
	declarations: [DailyGridComponent],
	exports: [DailyGridComponent],
	imports: [
		CommonModule,
		SharedModule,
		I18nTranslateModule.forChild(),
		NbAccordionModule,
		NbCardModule,
		NbIconModule,
		NbSelectModule,
		NbSpinnerModule,
		FormsModule,
		ProjectColumnViewModule,
		NbBadgeModule,
		TableComponentsModule,
		NoDataMessageModule
	]
})
export class DailyGridModule {}
