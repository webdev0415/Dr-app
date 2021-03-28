import { Component, Input, OnInit } from "@angular/core";
import { PatientListEntity } from "patient-list/interfaces/patient-list-entity.model";
import { Observable } from "rxjs";
import { ChatService } from "./chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  isMinimized: boolean = false;
  userId: string = "";
  message: string;
  messages: { userId: string; message: string; userType: string }[] = [];
  @Input() patientListEntity: PatientListEntity;
  isShowChat: boolean = false;

  constructor(private chatService: ChatService) {
    this.seedMessages();
    this.chatService.isShowChat$.subscribe((data) => {
      this.isShowChat = data;
      this.isMinimized = false;
    });
  }

  seedMessages() {
    this.messages = [
      { userId: "12", message: "Hi", userType: "sender" },
      { userId: "11", message: "Hello", userType: "receiver" },
      { userId: "12", message: "How are you doing well?", userType: "sender" },
      { userId: "12", message: "How have you been?", userType: "sender" },
      { userId: "11", message: "I am doing well.", userType: "receiver" },
      { userId: "11", message: "WBU?", userType: "receiver" },
      { userId: "12", message: "I am also doing well.", userType: "sender" },
      {
        userId: "12",
        message: "Been a long time since we meet.",
        userType: "sender",
      },
    ];
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = "";
  }

  ngOnInit() {
    this.seedMessages();
    this.initSocket();
    this.chatService
      .getMessages()
      .subscribe((message: any) => {
        this.messages.push(message);
      });
  }

  initSocket() {
    this.chatService.initSocket(this.patientListEntity.patient_id);
  }

  disconnectSocket() {
    this.chatService.disconnectSocket();
  }
}