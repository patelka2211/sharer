export function basicEncrypt(plainText: string) {
    try {
        return btoa(plainText);
    } catch (error) {
        return plainText;
    }
}
