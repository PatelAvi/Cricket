import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddataComponent } from './component/adddata/adddata.component';
import { StudentComponent } from './component/student/student.component';

import { StudentItemComponent } from './component/student-item/student-item.component';






@NgModule({
  declarations: [
    AppComponent,
    AdddataComponent,
    StudentComponent,
    
    StudentItemComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
