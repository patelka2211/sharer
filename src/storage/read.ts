import { basicDecrypt } from "./basicDecrypt";
import { storageKeyFormat } from "./storageKeyFormat";

export function __storageRead(recordName: string) {
    recordName = storageKeyFormat(recordName);
    let recordValue = localStorage.getItem(recordName);
    if (recordValue === null) return;
    recordValue = basicDecrypt(recordValue);
    try {
        return JSON.parse(recordValue) as object;
    } catch (error) {
        return recordValue;
    }
}
