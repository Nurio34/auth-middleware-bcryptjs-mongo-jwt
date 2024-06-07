"use client";

import { useState } from "react";
import SubmitButton from "../Components/SubmitButton";
import { login } from "../actions";
import { useRouter } from "next/navigation";

function Login() {
    const router = useRouter();

    type FormType = {
        username: string;
        password: string;
    };

    const initialState = {
        username: "Nurio34",
        password: "1234",
    };

    const [formData, setFormData] = useState<FormType>(initialState);

    const isFormValid = Object.values(formData).every(
        (value) => value.trim() !== "",
    );

    const handleSubmit = async () => {
        const result = await login(formData);

        if (result.success) {
            router.push("/");
        }
    };

    return (
        <form
            action={handleSubmit}
            className="grid gap-[1vh] justify-stretch max-w-lg py-[2vh] px-[4vw] border-secondary border my-[2vh] mx-[4vw] md:mx-auto"
        >
            <h2 className="text-center font-bold text-2xl">Log In !</h2>
            <label htmlFor="username">
                <p>Username</p>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="input input-sm input-primary w-full"
                    value={formData.username}
                    onChange={(e) =>
                        setFormData((prev) => {
                            return { ...prev, username: e.target.value };
                        })
                    }
                />
            </label>

            <label htmlFor="password">
                <p>Password</p>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="input input-sm input-primary w-full"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData((prev) => {
                            return { ...prev, password: e.target.value };
                        })
                    }
                />
            </label>
            <SubmitButton value="Login" isFormValid={isFormValid} />
        </form>
    );
}

export default Login;
