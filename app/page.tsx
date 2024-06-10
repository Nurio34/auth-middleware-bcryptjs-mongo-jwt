import Image from "next/image";
import { getAuthedUser } from "./actions";

export default async function Home() {
    const { data } = await getAuthedUser();
    const { username } = data;

    return <h1>Hell ye {username} . You did it !</h1>;
}
