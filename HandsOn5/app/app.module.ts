import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { ImageManagerComponent }   from './img.component';

@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule 
    ],
    declarations: [ 
        AppComponent,
        ImageManagerComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
