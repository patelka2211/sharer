export let isSharerButtonActive: true | undefined = undefined;

export function changeSharerButtonStatus(newStatus: true | undefined) {
    isSharerButtonActive = newStatus;
}
