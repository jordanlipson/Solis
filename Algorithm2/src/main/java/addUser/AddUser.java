package addUser;

import java.util.Map;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;


public class AddUser{
	public AddUser(Map<String,Object> map)
	{
		
		//opens doc from mongodb atlas
		MongoClientURI uri = new MongoClientURI("mongodb+srv://RobynBerdan:SH2022@cluster0.pwxqf.mongodb.net/Users?retryWrites=true&w=majority");
		
		try(MongoClient mongoClient = new MongoClient(uri))
		{
			MongoDatabase database = mongoClient.getDatabase("Users");
			MongoCollection<Document> collection = database.getCollection("user");
			
			//creates new doc with the map passed in
			Document doc = new Document(map);
			
			//add doc to our files
			collection.insertOne(doc);
		}
		
	}                                                                                                                                                                                                                 
}