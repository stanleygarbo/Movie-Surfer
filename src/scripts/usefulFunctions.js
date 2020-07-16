export function truncateString(str, num) {
    return str && str.length > num ? str.slice(0, num) + "..." : str ;
}