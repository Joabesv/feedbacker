// this hook will be acting like my events service
import { emitter } from '@/utils/event-buzz';

const EVENT_NAME = 'modal:toogle';

export function useModal() {
  function open(payload: {}) {
    emitter.emit(EVENT_NAME, { status: true, ...payload });
  }

  function close(payload: {}) {
    emitter.emit(EVENT_NAME, { status: false, ...payload });
  }

  function listen(fn: (payload: any) => void) {
    emitter.on(EVENT_NAME, fn);
  }

  function off(fn: (payload: any) => void) {
    emitter.off(EVENT_NAME, fn);
  }

  return { open, close, listen, off };
}
