// : 3x3A1VEc4KSK6nyp
// "mongodb+srv://nurioonsoftware:3x3A1VEc4KSK6nyp@cluster0.hpznlgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// "mongodb+srv://nurioonsoftware:3x3A1VEc4KSK6nyp@cluster0.hpznlgt.mongodb.net/"
"use server";

import mongoose from "mongoose";

const connectionToDB = async () => {
    const connectionUrl =
        "mongodb+srv://nurioonsoftware:3x3A1VEc4KSK6nyp@cluster0.hpznlgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    mongoose
        .connect(connectionUrl)
        .then(() => console.log("Connected successfully"))
        .catch(() => console.log("Error while 'Conneting to DB'"));
};

export default connectionToDB;
