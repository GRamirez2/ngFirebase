import { Component, OnInit } from '@angular/core';
import {QuestionsService} from "../shared/model/questions.service";
import {Messages} from "../shared/model/messages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions: Messages[];

  constructor(private QuestionsService: QuestionsService) { }

  ngOnInit() {
    this.QuestionsService.findAllMessages()
      .do(console.log)
      .subscribe(
        messages => this.questions = messages
      );
  }

}
