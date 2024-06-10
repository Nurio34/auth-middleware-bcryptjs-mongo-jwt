"use client";

import { useRouter } from "next/navigation";

function Signup() {
    const router = useRouter();

    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
                router.push("/signup");
            }}
        >
            Signup
        </button>
    );
}

export default Signup;
