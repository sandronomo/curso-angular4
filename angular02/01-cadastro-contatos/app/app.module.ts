import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contatosModule } from './contatos/contatos.module';

@NgModule({
    imports:[BrowserModule,
    contatosModule
],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}



