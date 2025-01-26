import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/// MAIN COMPONENTS  /// MAIN COMPONENTS  /// MAIN COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
/// MAIN COMPONENTS  /// MAIN COMPONENTS  /// MAIN COMPONENTS
/// PAGES COMPONENTS  /// PAGES COMPONENTS   /// PAGES COMPONENTS 
import { MeComponent } from './components/person/me/me.component';
import { ProjectsComponent } from './components/person/projects/projects.component';
import { BackEndComponent } from './components/back-end/back-end.component';
/// PAGES COMPONENTS  /// PAGES COMPONENTS   /// PAGES COMPONENTS 
/// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS  /// LANGUAGES COMPONENTS
import { HtmlComponent } from './components/languages/html/html.component';
import { CssComponent } from './components/languages/css/css.component';
import { ScssComponent } from './components/languages/scss/scss.component';
import { JavascriptComponent } from './components/languages/javascript/javascript.component';
import { TypescriptComponent } from './components/languages/typescript/typescript.component';
import { CSharpComponent } from './components/languages/c-sharp/c-sharp.component';
import { SQLComponent } from './components/languages/sql/sql.component';
/// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS  /// LANGUAGES COMPONENTS
/// ALL ROUTES /// ALL ROUTES  /// ALL ROUTES  /// ALL ROUTES
/// ALL ROUTES /// ALL ROUTES  /// ALL ROUTES  /// ALL ROUTES
const routes: Routes = [
  /// REDIRECT   /// REDIRECT   /// REDIRECT
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  /// REDIRECT   /// REDIRECT   /// REDIRECT
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: "Me",
    component: MeComponent
  },
  {
    path: "Projects",
    component: ProjectsComponent
  },
  {
    path: "back-end",
    component: BackEndComponent
  },
   /// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS
   /// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS
   {
    path: "html",
    component: HtmlComponent
   },
   {
    path: "css",
    component: CssComponent
   },
   {
    path: "scss",
    component: ScssComponent
   },
   {
    path: "javascript",
    component: JavascriptComponent
   },
   {
    path: "typescript",
    component: TypescriptComponent
   },
   {
    path: "Csharp",
    component: CSharpComponent
   },
   {
    path: "sql",
    component: SQLComponent
   },
  /// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS
   /// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS /// LANGUAGES COMPONENTS
  {
    path: "**",
    component: ErrorComponent
  },
];
/// ALL ROUTES /// ALL ROUTES  /// ALL ROUTES  /// ALL ROUTES
/// ALL ROUTES /// ALL ROUTES  /// ALL ROUTES  /// ALL ROUTES
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
