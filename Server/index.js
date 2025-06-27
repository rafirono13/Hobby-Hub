const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.je31cgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();

    const hobbyHubDB = client.db("HobbyHubDB");
    const userCollection = hobbyHubDB.collection("users");
    const groupInformation = hobbyHubDB.collection("groupInformation");

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log(newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const users = await cursor.toArray();
      res.send(users);
    });

    app.post("/groupInformation", async (req, res) => {
      const newGroup = req.body;
      console.log(newGroup);
      const result = await groupInformation.insertOne(newGroup);
      res.send(result);
    });

    app.get("/groupInformation", async (req, res) => {
      const cursor = groupInformation.find();
      const group = await cursor.toArray();
      res.send(group);
    });

    // New API ENDPOINTS

    // ! JOIN A Group
    app.patch("/groupInformation/:id/join", async (req, res) => {
      const groupId = req.params.id;
      const { userEmail } = req.body;

      if (!userEmail) {
        return res.status(400).send({ message: "User email is required" });
      }

      try {
        const result = await groupInformation.updateOne(
          { _id: new ObjectId(groupId) },
          { $addToSet: { members: userEmail } }
        );

        if (result.modifiedCount === 0 && result.matchedCount === 1) {
          return res.send({
            message: "User is already a member of this group.",
          });
        }
        res.send(result);
      } catch (error) {
        console.error("Error joining group:", error);
        res.status(500).send({ message: "Internal server error" });
      }
    });

    // ! JOIN A Group

    // New API ENDPOINTS

    app.get("/groupInformation/user", async (req, res) => {
      try {
        const email = req.query.email;
        if (!email) {
          return res.status(400).send({ message: "Email is required" });
        }
        const query = { creatorEmail: email };
        const result = await groupInformation.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching user groups:", error);
        res.status(500).send({ message: "Internal server error" });
      }
    });

    app.get("/groupInformation/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const query = { _id: new ObjectId(id) };
        const group = await groupInformation.findOne(query);
        if (group) {
          res.send(group);
        } else {
          res.status(404).send({ message: "Group not found" });
        }
      } catch (error) {
        console.error("Invalid ObjectId format or database error:", error);
        res.status(400).send({ message: "Invalid group ID format" });
      }
    });

    app.put("/groupInformation/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updatedGroup = req.body;

        const result = await groupInformation.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedGroup }
        );

        res.send(result);
      } catch (error) {
        console.error("Error updating group:", error);
        res.status(500).send({ message: "Internal server error" });
      }
    });

    app.delete("/groupInformation/:id", async (req, res) => {
      const id = req.params.id;
      const result = await groupInformation.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    app.get("/", (req, res) => {
      res.send("Hobby Hub Server is running and connected to MongoDB!");
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    app.listen(port, () => {
      console.log(`Hobby Hub server listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB or setup server:", error);
  }
}
run().catch(console.dir);
