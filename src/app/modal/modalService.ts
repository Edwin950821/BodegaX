import { Injectable, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
@NgModule({

    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [ [ModalService()] ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}

export function ModalService(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
    throw new Error('Function not implemented.');
}


export class AppService{}
