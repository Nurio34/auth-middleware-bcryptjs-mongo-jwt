"use client";
import { useState } from "react";
import SubmitButton from "../Components/SubmitButton";
import { signup } from "../actions";
import { useRouter } from "next/navigation";

function Signup() {
    const router = useRouter();

    type FormType = {
        username: string;
        email: string;
        password: string;
    };

    const initialFormData = {
        username: "Nurio34",
        email: "nurio@gmail.com",
        password: "1234",
    };

    const [formData, setFormData] = useState<FormType>(initialFormData);

    const isFormValid = Object.values(formData).every(
        (value) => value.trim() !== "",
    );

    const handleSubmit = async () => {
        const result = await signup(formData);

        if (result.data) {
            router.push("/login");
        }
    };

    return (
        <form
            action={handleSubmit}
            className="grid gap-[1vh] justify-stretch max-w-lg py-[2vh] px-[4vw] border-secondary border my-[2vh] mx-[4vw] md:mx-auto"
        >
            <h2 className="text-center font-bold text-2xl">Sign Up !</h2>
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
            <label htmlFor="email">
                <p>Email</p>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="input input-sm input-primary w-full"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData((prev) => {
                            return { ...prev, email: e.target.value };
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
            <SubmitButton value="Signup" isFormValid={isFormValid} />
        </form>
    );
}

export default Signup;
