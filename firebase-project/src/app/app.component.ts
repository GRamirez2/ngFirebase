import { Component } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  messages$: FirebaseListObservable<any>;
  questions$: FirebaseObjectObservable<any>;

  firstonList: any;

  constructor(private db: AngularFireDatabase) {

    //using the object method
    // const object$  = db.object('messages');
    // object$.subscribe(console.log)

    //using the list method
    // const test$  : FirebaseListObservable<any> = db.list('messages');
    // test$.subscribe(console.log)

    this.messages$ = db.list('messages');
    this.messages$.subscribe(console.log);

    this.questions$ = db.object('questions/1');
    this.questions$.subscribe(console.log);

    this.messages$.map(first => first[0])
      .subscribe(first => this.firstonList = first)
  }


  listPush() {
    this.messages$.push({description: "NEW MESSAGE"})
      .then(
        ()=> console.log('List Push Done'),
        console.error
      );
  }

  listRemove(){
    this.messages$.remove(this.firstonList)
      .then(
        () => console.log('List Remove Completed!'),
        console.error
      );
  }
//
  listUpdate(){
    this.messages$.update(this.firstonList,{description: "New Description"}, )
      .then(
        () => console.log('UPDATE is complete'),
        console.error
      );
  }

  objectUpdate(){
    this.questions$.update({text: 'NEW DESCRIPTION ON CLICK'})
      .then(
        () => console.log('Ojbect Update Complete!'),
        console.error
      );
  }

  // object.set is a destructive operation !!
  objectSet(){
    this.questions$.set({text: 'this is new text', description: 'NEW DESCRIPTION ON CLICK SET'})
      .then(
        () => console.log('OBJECT SET complete!'),
        console.error
      );
  }

  objectRemove(){
    this.questions$.remove()
      .then(
        () => console.log('REMOVE OBJECT 1 COMPLETE!'),
        console.error
      );
  }


} // end of class
