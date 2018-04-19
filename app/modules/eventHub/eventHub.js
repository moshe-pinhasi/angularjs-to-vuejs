var eventHub = new window.Vue();

export const KILLER_UPDATED = 'KILLER_UPDATED';

export const EVENT_HUB_ACTIONS = {
    killersUpdated: function killersUpdated(killers) {
        eventHub.$emit(KILLER_UPDATED, killers);
    }
};

export default eventHub;