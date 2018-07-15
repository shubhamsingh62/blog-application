import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//not by def
import{ FormsModule } from '@angular/forms';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ToastModule} from 'ng2-toastr/ng2-toastr';

//router module to setup routing which is not included by default
import{RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';

//import statement for services - isn't added by def
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

//decorators - by default
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //vry imp
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/:blogId',component:BlogEditComponent}
    //{path:'**',component:NotFoundComponent}


  
    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
