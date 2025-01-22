import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { HttpClientModule } from '@angular/common/http';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MeComponent } from './components/person/me/me.component';
import { ProjectsComponent } from './components/person/projects/projects.component';
import { SkillsComponent } from './components/person/skills/skills.component';
import { HtmlComponent } from './components/languages/html/html.component';
import { CssComponent } from './components/languages/css/css.component';
import { JavascriptComponent } from './components/languages/javascript/javascript.component';
import { TypescriptComponent } from './components/languages/typescript/typescript.component';
import { CSharpComponent } from './components/languages/c-sharp/c-sharp.component';
import { SQLComponent } from './components/languages/sql/sql.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NavBarComponent,
    FooterComponent,
    MeComponent,
    ProjectsComponent,
    SkillsComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    TypescriptComponent,
    CSharpComponent,
    SQLComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
