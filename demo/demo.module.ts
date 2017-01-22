import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLayoutsModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgxLayoutsModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}