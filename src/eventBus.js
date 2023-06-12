// Create the event bus
export default function createEventBus() {
    const listeners = {}

    function $on(event, callback) {
        if (!listeners[event]) {
            listeners[event] = []
        }
        listeners[event].push(callback)
    }

    function $emit(event, ...args) {
        const eventListeners = listeners[event]
        if (eventListeners) {
            eventListeners.forEach(callback => callback(...args))
        }
    }

    function $off(event) {
        if (!listeners[event]) {
            return;
        }

        delete listeners[event];
    }

    return {
        $on,
        $off,
        $emit
    }
}
