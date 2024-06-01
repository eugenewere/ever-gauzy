import { NgModule } from '@angular/core';
import { LanguagesEnum } from '@gauzy/contracts';
import { I18nTranslateModule, I18nTranslateService } from './i18n';

@NgModule({
	imports: [I18nTranslateModule.forRoot()]
})
export class UiSdkModule {
	constructor(protected readonly _i18nTranslateService: I18nTranslateService) {
		const availableLanguages = Object.values(LanguagesEnum);
		_i18nTranslateService.setAvailableLanguags(availableLanguages);
	}
}
