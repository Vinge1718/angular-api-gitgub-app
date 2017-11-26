import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppComponent, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
