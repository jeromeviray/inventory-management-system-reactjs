export default function authHeader() {
    const credentials = JSON.parse(localStorage.getItem("credentials"));

    if (credentials && credentials.accessToken) {
        // For Spring Boot back-end
        return { Authorization: credentials.type + credentials.accessToken };

    } else {
        return {};
    }
}
