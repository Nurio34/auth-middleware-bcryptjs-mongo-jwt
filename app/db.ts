import mongoose from "mongoose";

const connectionToDB = async () => {
    const connectionUrl = process.env.MONGO_URL!;
    mongoose
        .connect(connectionUrl)
        .then(() => console.log("Connected successfully"))
        .catch(() => console.log("Error while 'Conneting to DB'"));
};

export default connectionToDB;
