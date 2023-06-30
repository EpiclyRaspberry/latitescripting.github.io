type EventName =
  | "world-tick"
  | "leave-game"
  | "receive-chat"
  | "send-chat"
  | "render2d";

interface LatiteEvent {}

interface CancellableEvent extends LatiteEvent {
  /**
   * If true, the event will be cancelled. (Example: setting the bool to true in SendChatEvent will stop the chat message from being sent. This is useful for custom commands)
   */
  cancel: boolean;
}

interface SendChatEvent extends CancellableEvent {
  message: string;
}

interface ReceiveChatEvent extends LatiteEvent {
  message: string;
  sender: string;
  xuid: string;
}

interface ClientEvents {
  "world-tick": LatiteEvent;
  "leave-game": LatiteEvent;
  "receive-chat": ReceiveChatEvent;
  "send-chat": SendChatEvent;
  render2d: LatiteEvent;
}

interface Latite {
  /**
   * Listen to an event.
   */
  listen<K extends keyof ClientEvents>(
    eventName: K,
    listener: (event: ClientEvents[K]) => void
  ): void;

  /**
   * Shows a Latite toast on the top of the screen.
   * @param notif The notification to show.
   */
  showNotification(notif: string): void;

  /**
   * Runs a Latite command.
   * @param cmd The command to run. Do not add the prefix (.)
   * @returns The success of the command.
   */
  runCommand(cmd: string): boolean;

  /**
   * Gets the module manager. Use this to register modules.
   */
  getModuleManager(): ModuleManager;

  /**
   * The Latite Client version. Example: v1.4.0 (release), b1.4.0 (beta)
   */
  version: string;
}

declare const client: Latite;