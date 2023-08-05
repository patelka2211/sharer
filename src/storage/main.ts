import { __storageCreate } from "./create";
import { __storageDelete } from "./delete";
import { __storageRead } from "./read";
import { __storageUpdate } from "./update";

export {
    __storageCreate as createRecord,
    __storageRead as readRecord,
    __storageUpdate as updateRecord,
    __storageDelete as deleteRecord,
};
