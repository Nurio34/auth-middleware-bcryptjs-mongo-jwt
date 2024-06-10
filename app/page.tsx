import Image from "next/image";
import { getAuthedUser } from "./actions";
import LogoutButton from "./Components/LogoutButton";
import SignupButton from "./Components/SignupButton";

export default async function Home() {
    const { data } = await getAuthedUser();

    if (data) {
        const { username } = data;
        return (
            <div>
                <header className="flex  justify-between py-[2vh] px-[4vw] items-center">
                    <div
                        className="font-bold text-2xl"
                        style={{ fontVariant: "small-caps" }}
                    >
                        NextAuth
                    </div>
                    <LogoutButton />
                </header>
                <h1>Hell ye {username} . You did it !</h1>
            </div>
        );
    }

    return (
        <div>
            <header className="flex  justify-between py-[2vh] px-[4vw] items-center">
                <div
                    className="font-bold text-2xl"
                    style={{ fontVariant: "small-caps" }}
                >
                    NextAuth
                </div>
                <SignupButton />
            </header>
            <p className=" text-center underline-offset-2 underline ">
                Welcome to NextAuth Homepage
            </p>
        </div>
    );
}
