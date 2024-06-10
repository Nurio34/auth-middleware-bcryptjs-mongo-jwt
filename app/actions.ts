"use server";

import { cookies } from "next/headers";
import connectionToDB from "./db";
import User from "./model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const signup = async (formData: any) => {
    await connectionToDB();

    try {
        const { username, email, password } = formData;

        const checkUserInDB = await User.findOne({ email });

        if (checkUserInDB) {
            return {
                success: false,
                msg: "'User' with this 'Email' already exists.",
            };
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        if (savedUser) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(savedUser)),
            };
        } else {
            return { success: false, msg: "Error while 'Save User to DB'" };
        }
    } catch (error) {
        return { success: false, msg: "Unexpected error occured" };
    }
};

export const login = async (formData: any) => {
    const { username, password } = formData;
    await connectionToDB();

    const checkUserInDB = await User.findOne({ username });

    if (!checkUserInDB) {
        return { success: false, msg: "No 'User' with this 'Username'" };
    }

    const comparePasswords = await bcryptjs.compare(
        password,
        checkUserInDB.password,
    );

    if (!comparePasswords) {
        return { success: false, msg: "Invalid 'Password'" };
    }

    const tokenPayload = {
        id: checkUserInDB._id,
        username: checkUserInDB.username,
        email: checkUserInDB.email,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET!, {
        expiresIn: "1d",
    });

    const getCookies = cookies();
    getCookies.set("token", token);

    return { success: true, msg: "Loged in successfully !" };
};

export const getAuthedUser = async () => {
    try {
        const getCookies = cookies();
        const token: RequestCookie | undefined = getCookies.get("token");

        if (!token) {
            return { success: false, msg: "No authanticated user" };
        }

        const decodedToken = jwt.verify(
            token.value,
            process.env.JWT_SECRET!,
        ) as jwt.JwtPayload;
        const user = await User.findOne({ _id: decodedToken.id });

        if (!user) {
            return {
                success: false,
                msg: "Error occued while 'getting user info' from DB",
            };
        }

        return { success: true, data: JSON.parse(JSON.stringify(user)) };
    } catch (error) {
        return {
            success: false,
            msg: "Unexpected error occured while 'getAuthedUser()'",
        };
    }
};

export const logout = () => {
    const getCookies = cookies();
    getCookies.delete("token");
};
