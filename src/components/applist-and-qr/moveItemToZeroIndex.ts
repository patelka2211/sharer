import { readRecord, updateRecord } from "../../storage/main";

export function moveItemToZerothIndex(index: number) {
    let appIds = readRecord("AppsIdList");
    if (Array.isArray(appIds)) {
        if (index >= appIds.length || index <= 0) return;
        const item = appIds.splice(index, 1)[0];
        appIds.unshift(item);
        updateRecord("AppsIdList", appIds);
    }
}
