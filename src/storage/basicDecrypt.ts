export function basicDecrypt(encrypted: string) {
    try {
        return atob(encrypted);
    } catch (error) {
        return encrypted;
    }
}
