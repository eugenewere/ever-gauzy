import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbButtonModule,
	NbCardModule,
	NbCheckboxModule,
	NbDialogModule,
	NbIconModule,
	NbInputModule,
	NbSelectModule,
	NbSpinnerModule,
	NbStepperModule,
	NbTabsetModule,
	NbTooltipModule
} from '@nebular/theme';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { NgxPermissionsModule } from 'ngx-permissions';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import {
	GauzyButtonActionModule,
	LeafletMapModule,
	LocationFormModule,
	PaginationV2Module
} from '@gauzy/ui-sdk/shared';
import { CardGridModule } from './../../../../@shared/card-grid/card-grid.module';
import { TagsColorInputModule } from './../../../../@shared/tags/tags-color-input/tags-color-input.module';
import { InventoryTableComponentsModule } from '../inventory-table-components';
import { SharedModule } from './../../../../@shared/shared.module';
import { ManageQuantityComponent } from './manage-quantity/manage-quantity.component';
import { ManageVariantsQuantityFormComponent } from './manage-variants-quantity-form/manage-variants-quantity-form.component';
import { ManageVariantsQuantityComponent } from './manage-variants-quantity/manage-variants-quantity.component';
import { SelectProductComponent } from './select-product-form/select-product-form.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';
import { WarehouseProductsTableComponent } from './warehouse-products-table/warehouse-products-table.component';
import { WarehousesRoutingModule } from './warehouses-routing.module';
import { WarehousesTableComponent } from './warehouses-table/warehouses-table.component';
import { WarehousesComponent } from './warehouses.component';

const NB_MODULES = [
	NbCardModule,
	NbButtonModule,
	NbIconModule,
	NbSpinnerModule,
	NbDialogModule,
	NbCheckboxModule,
	NbSelectModule,
	NbTabsetModule,
	NbInputModule,
	NbStepperModule,
	NbTooltipModule
];

@NgModule({
	declarations: [
		WarehousesTableComponent,
		WarehouseFormComponent,
		WarehousesComponent,
		WarehouseProductsTableComponent,
		SelectProductComponent,
		ManageQuantityComponent,
		ManageVariantsQuantityComponent,
		ManageVariantsQuantityFormComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		...NB_MODULES,
		Angular2SmartTableModule,
		NgxPermissionsModule.forChild(),
		I18nTranslateModule.forChild(),
		WarehousesRoutingModule,
		SharedModule,
		LocationFormModule,
		LeafletMapModule,
		TagsColorInputModule,
		PaginationV2Module,
		CardGridModule,
		GauzyButtonActionModule,
		CardGridModule,
		InventoryTableComponentsModule
	],
	providers: []
})
export class WarehousesModule {}
