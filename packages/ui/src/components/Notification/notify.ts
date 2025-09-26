import { NotifyPayload } from '@ems/type';

export function notify(type: NotifyPayload['type'] = 'info', message: string) {
  window.dispatchEvent(
    new CustomEvent('ems:notify', { detail: { type, message } })
  );
}
