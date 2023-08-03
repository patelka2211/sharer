import { basicEncrypt } from "./basicEncrypt";
import { storageKeyFormat } from "./storageKeyFormat";

export function __storageCreate(
    recordName: string,
    recordValue: string | object
) {
    recordName = storageKeyFormat(recordName);
    if (typeof recordValue === "object")
        recordValue = JSON.stringify(recordValue);
    recordValue = basicEncrypt(recordValue);
    localStorage.setItem(recordName, recordValue);
    return {
        [recordName]: recordValue,
    };
}
