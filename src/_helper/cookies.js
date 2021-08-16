export const set = ({ name, value, expirationDate }) => {
    const expiresAt = new Date(expirationDate).toUTCString();

    document.cookie = `${name} = ${value};expires=${expiresAt}; path=/`
}