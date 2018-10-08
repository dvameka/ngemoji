import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// added by me
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FinditemComponent } from './components/finditem.component';
import { ListitemComponent } from './components/listitem.component';
import { BookDBService } from './services/bookDB.service';
import { TextinputComponent } from './components/textinput.component';
import { ShowemojiComponent } from './components/showemoji.component';

@NgModule({
  declarations: [
    AppComponent,
    FinditemComponent,
    ListitemComponent,
    TextinputComponent,
    ShowemojiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [BookDBService], // added here
  bootstrap: [AppComponent]
})
export class AppModule { }
