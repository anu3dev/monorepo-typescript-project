export interface NotifyPayload {
  type: 'success' | 'error' | 'info';
  message: string;
}

export function notify(type: NotifyPayload['type'] = 'info', message: string) {
  window.dispatchEvent(
    new CustomEvent('ems:notify', { detail: { type, message } })
  );
}
