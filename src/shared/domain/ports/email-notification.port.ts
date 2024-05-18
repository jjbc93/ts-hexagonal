export const EmailNotificationPort = Symbol('EmailNotificationPort');

export interface EmailNotificationPort {
  sendMessage(message: string, to: string[], subject: string): Promise<void>;
}
