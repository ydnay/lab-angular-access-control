import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccessControlLogService } from './services/access-control-log.service';

import { AppComponent } from './app.component';
import { AccessLogComponent } from './access-log/access-log.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccessControlLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
