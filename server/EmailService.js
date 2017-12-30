import {singleton} from 'dependency-injection-es6';
import {MessageService} from './MessageService';
 
@singleton
export class EmailService extends MessageService {
    constructor(){
    	console.info("Email constructor");
    	 super();
    }
    sendMessage(msg){
        console.info("Email Message sent from EmailService");
       
    }
}