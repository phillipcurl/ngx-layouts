import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from './../src/helloWorld.component';
import { NgxLayoutsModule } from '../src';

describe('layout-hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [NgxLayoutsModule.forRoot()]});
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<HelloWorldComponent> = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the ngx-layouts module!');
  });

});
