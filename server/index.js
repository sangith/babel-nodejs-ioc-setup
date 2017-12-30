"use strict";
import {singleton,container,inject} from 'dependency-injection-es6';
import {MessageService} from './MessageService';
import {EmailService} from './EmailService';



class MyApplication {
 
	@inject(MessageService)
    service;
  
    constructor(){
        console.info("will be injected",this.service);
    }
}
/* do binding */
container.bind(MessageService,EmailService);

/* Instantiate the app .. and see what is getting injected */
container.resolve(MyApplication);
