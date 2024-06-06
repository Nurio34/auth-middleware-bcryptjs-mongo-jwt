"use server";

import main from "./db";
import connectionToDB from "./db";
import User from "./model";
// import bcryptjs from "bcryptjs";
export const signup = async (formData: any) => {
    await connectionToDB();

    try {
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        const checkUserInDB = User.findOne({ email });

        if (checkUserInDB) {
            return {
                success: false,
                msg: "There is already a 'User' with this 'Email'",
            };
        }

        // const salt = bcryptjs.genSalt(10);
        // const hashedPassword = await bcryptjs.hash(password, salt);
        // console.log({ hashedPassword });

        // // const newUser = await new User({username,email,password})
    } catch (error) {
        return { success: false, msg: "Unexpected error occured" };
    }
};
