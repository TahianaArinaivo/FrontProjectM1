import * as signalR from "@microsoft/signalr";

const hubUrl = "http://localhost:5024/chathub";

class SignalRService {
  connection: signalR.HubConnection;

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl)
      .build();
  }

  startConnection = (): Promise<void> => {
    return this.connection
      .start()
      .then(() => console.log("SignalR connection started."))
      .catch((err) =>
        console.error("Error starting SignalR connection: ", err)
      );
  };

  stopConnection = (): Promise<void> => {
    return this.connection
      .stop()
      .then(() => console.log("Signal connection stopped"))
      .catch((err) =>
        console.error("Error stopping SignalR connection: ", err)
      );
  };

  addReceiveMessageListener = (
    callback: (user: string, message: string) => void
  ): void => {
    this.connection.on("ReceiveMessage", callback);
  };

  sendMessage = (user: string, message: string): Promise<void> => {
    return this.connection.invoke("SendMessage", user, message);
  };
}

export default SignalRService;
