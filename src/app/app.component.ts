import {Component, OnDestroy, OnInit} from '@angular/core';
import {callbackify} from 'util';
import {resolve} from 'url';
import {rejects} from 'assert';
import * as firebase from 'firebase';


import {Observable, Subscribable} from 'rxjs/observable';
import 'rxjs/Rx';
import {Subscription} from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    
  }



}
