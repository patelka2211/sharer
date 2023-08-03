export let continueToClose: boolean | undefined = undefined;

export function setContinueToClose(newValue: boolean | undefined) {
    continueToClose = newValue;
}

export let isSharerOpen: true | undefined = undefined;

export function changeSharerOpenStatus(newStatus: true | undefined) {
    isSharerOpen = newStatus;
}
