import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MeComponent } from './components/person/me/me.component';
import { ProjectsComponent } from './components/person/projects/projects.component';
import { HtmlComponent } from './components/languages/html/html.component';
import { CssComponent } from './components/languages/css/css.component';
import { JavascriptComponent } from './components/languages/javascript/javascript.component';
import { TypescriptComponent } from './components/languages/typescript/typescript.component';
import { CSharpComponent } from './components/languages/c-sharp/c-sharp.component';
import { SQLComponent } from './components/languages/sql/sql.component';
import { ScssComponent } from './components/languages/scss/scss.component';
import { BackEndComponent } from './components/back-end/back-end.component';
import { LanguagesNavBarComponent } from './components/languages/languages-nav-bar/languages-nav-bar.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { TrFooterComponent } from './components/languages/tr-footer/tr-footer.component';
import { SqlFooterComponent } from './components/languages/sql-footer/sql-footer.component';
import { LanguagesPageComponent } from './components/languages/languages-page/languages-page.component';
import { SwitchComponent } from './components/switch/switch.component';
import { InfoComponent } from './components/info/info.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavBarComponent,
    FooterComponent,
    MeComponent,
    ProjectsComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    TypescriptComponent,
    CSharpComponent,
    SQLComponent,
    ScssComponent,
    BackEndComponent,
    LanguagesNavBarComponent,
    ImageModalComponent,
    TrFooterComponent,
    SqlFooterComponent,
    LanguagesPageComponent,
    SwitchComponent,
    InfoComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
    HttpClientModule,
    BrowserAnimationsModule
    //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
