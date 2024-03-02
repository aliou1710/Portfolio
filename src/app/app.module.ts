import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { NotFoundPageComponent } from './Not-Found-Page/Not-Found-Page.component'
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ContactComponent } from './contact/contact.component'
import { ServiceComponent } from './service/service.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ModalComponent } from './Shared/modal/modal.component'
import { MatButtonModule } from '@angular/material/button'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { NgxIndexedDBModule } from 'ngx-indexed-db'
import { dbConfig } from './ServicesIndexDb/indexDb.component'
import { LaunchModalComponent } from './Shared/launchModal/launchModal.component'

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

const COMPONENTS = [
	AppComponent,
	HomeComponent,
	NotFoundPageComponent,
	ContactComponent,
	ServiceComponent,
	PortfolioComponent,
	HeaderComponent,
	FooterComponent,
	ModalComponent,
	LaunchModalComponent,

	/*MATERIAL*/
]
const MODULES = [
	BrowserModule,
	AppRoutingModule,
	NgbModule,
	ReactiveFormsModule,
	MatButtonModule,
	HttpClientModule,
	TranslateModule.forRoot({
		loader: {
			provide: TranslateLoader,
			useFactory: createTranslateLoader,
			deps: [HttpClient],
		},
	}),
	NgxIndexedDBModule.forRoot(dbConfig),
]

@NgModule({
	declarations: COMPONENTS,
	imports: MODULES,
	providers: [NgbActiveModal],
	bootstrap: [AppComponent],
})
export class AppModule {}
