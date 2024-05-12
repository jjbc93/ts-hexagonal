export const TelegramNotificationPort = Symbol('TelegramNotificationPort');

export interface TelegramNotificationPort {
  sendMessage(message: string): Promise<void>;
}
