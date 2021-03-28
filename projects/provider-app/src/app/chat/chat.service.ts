import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { Subject } from "rxjs";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private url = `${environment.apiDomain}/patient/chat`;
  private socket;
  isShowChat$: Observable<any> = of(false);
  private isShowChatSubject = new Subject<any>();

  constructor() {
    this.isShowChat$ = this.isShowChatSubject.asObservable();
  }

  initSocket(userId) {
    // this.disconnectSocket();
    this.socket = io(`${this.url}/${userId}`);
  }

  public sendMessage(message) {
    this.socket.emit("chat-send-patient", message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on("chat-send-doctor", (message) => {
        observer.next(message);
      });
    });
  };

  disconnectSocket(){
    this.isShowChatSubject.next(false);
    this.socket.disconnect();
  }

  isShowChat(isShowChat, patientId) {
    this.initSocket(patientId);
    this.isShowChatSubject.next(isShowChat);
  }
}