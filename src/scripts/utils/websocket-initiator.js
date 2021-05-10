import NotificationHelper from "./notification-helper";
import CONFIG from "../globals/config";

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.title} is on cinema!`,
      options: {
        body: restaurant.overview,
        icon: "icons/icon-192x192.png",
      },
    });
  },
};

export default WebSocketInitiator;
