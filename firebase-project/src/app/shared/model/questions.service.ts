import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Messages} from "./messages";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class QuestionsService {

  constructor(private db: AngularFireDatabase) { }

  findAllMessages(): Observable<Messages[]> {
    return this.db.list('messages')
  }

}
