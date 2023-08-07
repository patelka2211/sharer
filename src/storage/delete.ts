import { storageKeyFormat } from "./storageKeyFormat";

export function __storageDelete(recordName: string) {
    recordName = storageKeyFormat(recordName);
    localStorage.removeItem(recordName);
}
