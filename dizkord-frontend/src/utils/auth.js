// Logout function that clears local store and redirects user to login page
export const logout = () => {
    localStorage.clear();
    window.location.pathname = "/login"
}