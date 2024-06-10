"use client";

import { logout } from "../actions";

function Logout() {
    const handleLogout = () => {
        logout();
    };

    return (
        <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
        </button>
    );
}

export default Logout;
