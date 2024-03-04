const express = require("express");
const connect = require("./config/database");
const dotenv = require("dotenv");
const userModel = require("./models/userModel");
const UserRepository = require("./repository/userRepository");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("app Running");
});

app.listen(PORT || 8000, async () => {
    console.log(`Server started on PORT: ${PORT}`);
    await connect();
    console.log("MondoDB connected");

    //  const User = await userModel.create({
    //      name: 'abcd',
    //       userEmail: 'a@b.com'
    //  });

    //   const User = await userModel.find({ userEmail: 'a@b.com' });

    //  const userRepo = new UserRepository();
    //  const User = await userRepo.update('65e56b384325648bbf1fd789', { name: 'The updated Name' });

    app.post("/", async (req, res) => {
        const { name, userEmail } = req.body;
        const userRepo = new UserRepository();
        try {
            const userAdded = await userRepo.create({
                name: name,
                userEmail: userEmail,
            });
            res.status(201).json(userAdded);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    //  console.log(User);
});
