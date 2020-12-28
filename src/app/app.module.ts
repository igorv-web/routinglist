import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { TaskmanagerComponent } from './works/taskmanager/taskmanager.component';
import { PhonemanagerComponent } from './works/phonemanager/phonemanager.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksComponent,
    HomeComponent,
    CenzorComponent,
    TaskmanagerComponent,
    PhonemanagerComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
