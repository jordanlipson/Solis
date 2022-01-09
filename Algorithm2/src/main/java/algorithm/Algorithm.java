package algorithm;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map.Entry;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;

import org.bson.types.ObjectId;


public class Algorithm{
	
	public static ArrayList<HashMap<String, Object>> processBesties(ArrayList<Document> besties) {
		
		//create list to add values to
		ArrayList<HashMap<String, Object>> arr = new ArrayList<HashMap<String, Object>>();
		
		//iterate through each potential match to convert Document to hash
		for (Document friend : besties) {
			
			//create new hashmap, and iterate through keys and values within friend to add them to the map. idk why this method doesnt exist so here we are
			HashMap<String, Object> map = new HashMap<String, Object>();
			for (Entry<String, Object> f : friend.entrySet()) {
				map.put(f.getKey(), f.getValue());
			}
			
			arr.add(map);
		}
		return arr;
	}
	
	
	public static void main(String[] args) {
		
		//uri with login, might require your own user/password, if so replace RobynBerdan w username and SH2022 with password
		MongoClientURI uri = new MongoClientURI("mongodb+srv://RobynBerdan:SH2022@cluster0.pwxqf.mongodb.net/Users?retryWrites=true&w=majority");
		
		
		try(MongoClient mongoClient = new MongoClient(uri))
		{
			//loads collection of users
			MongoDatabase database = mongoClient.getDatabase("Users");
			MongoCollection<Document> collection = database.getCollection("user");
			
			//someth to iterate over all the users 
			FindIterable<Document> iter = collection.find();
			MongoCursor<Document> cursor = iter.iterator();
			
			
			//creates a doc for current user for other user values to be compared to 
			ObjectId id = new ObjectId("61d9ee73bbb44ae75bc42154"); //Jordan's id
			Document query = new Document("_id", id);
			Document user = collection.find(query).iterator().next();
			System.out.println(user);
			
			//Arr list for best matches found by alg
			ArrayList<Document> besties = new ArrayList<Document>();
			
			
			//iterates over all users
			while (cursor.hasNext()) {
				Document doc = cursor.next();
				
				//we dont match with ourself
				if (doc.get("_id", ObjectId.class).equals(id)) {
					continue;
				}
				
				
				//conditions to be besties, seperate if's for debugging purposes
				if ((user.getString("University").equals(doc.getString("University"))))
						{
					besties.add(doc);
					/*System.out.print(doc.getString("name")+ ": ");
					System.out.println(user.getString("University"));*/
				}	
				//they look uglier than they are, will check if there are any common items within arrays if both are not undefined. if I dont do this it breaks. dont ask why
				else if (!(user.getList("Learning", String.class) == null || doc.getList("Learning", String.class) == null) && 
						!Collections.disjoint(user.getList("Learning", String.class), doc.getList("Learning", String.class))) {
					besties.add(doc);
					/*System.out.print(doc.getString("name")+ ": ");
					System.out.print(user.getList("Learning", String.class));
					System.out.print(" + ");
					System.out.println(doc.getList("Learning", String.class));*/
				}
				else if (!(user.getList("Hobbies", String.class) == null || doc.getList("Hobbies", String.class) == null) && 
						!Collections.disjoint(user.getList("Hobbies", String.class), doc.getList("Hobbies", String.class))) {
					besties.add(doc);
					
					/*System.out.print(doc.getString("name")+ ": ");
					System.out.print(user.getList("Hobbies", String.class));
					System.out.print(" + ");
					System.out.println(doc.getList("Hobbies", String.class));*/
				}
					
			} cursor.close();
			
			processBesties(besties);
		}
	
	}
                                                                                                                                                                                    
}