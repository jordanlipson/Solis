import { MongoClient } from "mongodb";
import * as db from "../db.json";

const uri = "mongodb+srv://" + db.username + ":" + db.password + "@" + db.clusterthing + ".mongodb.net/" + db.dbname + "?retryWrites=true&w=majority";
// @ts-ignore
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
export default client;
