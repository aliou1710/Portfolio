import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { NotFoundPageComponent } from './Not-Found-Page/Not-Found-Page.component'
import { ContactComponent } from './contact/contact.component'
import { ServiceComponent } from './service/service.component'
import { PortfolioComponent } from './portfolio/portfolio.component'

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'notFound', component: NotFoundPageComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'service', component: ServiceComponent },
	{ path: 'contact', component: ContactComponent },
	// Add more routes as needed
]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
