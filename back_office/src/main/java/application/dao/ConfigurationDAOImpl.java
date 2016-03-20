package application.dao;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.ArrayList;

import application.pojo.Audio;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;
import com.mongodb.util.JSON;
import lombok.Data;
/**
 * Created by wadendo on 15/03/16.
 */
public class ConfigurationDAOImpl implements ConfigurationDAO {


    DBCollection collection;

    public ConfigurationDAOImpl() throws UnknownHostException {
        MongoClient mongoClient  = new MongoClient(new ServerAddress("localhost", 27017));
        DB database = mongoClient.getDB("Mediatheque");
        collection = database.getCollection("audios");

    }


    @Override
    public void save(Audio audio) {

        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();

        String json = null;
        try {
            json = ow.writeValueAsString(audio);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        //Transform Json to DBObject
        DBObject resourceConfig = (DBObject) JSON.parse(json);
        collection.insert(resourceConfig);

    }

    @Override
    public Audio get(String name) {
        BasicDBObject whereQuery = new BasicDBObject();


        whereQuery.put("name", name);



        DBCursor result = null;

        result = collection.find(whereQuery);

        //create ObjectMapper instance
        ObjectMapper objectMapper = new ObjectMapper();
        //convert json string to object
        Audio audio = null;
        while (result.hasNext())
            try {


                audio = objectMapper.readValue(result.next().toString(), Audio.class);
                //readValue(jsonData, SG_Configuration.class);
            } catch (IOException e) {
                e.printStackTrace();
            }
        return audio;

    }

    @Override
    public void delete(String name) {
        BasicDBObject whereQuery = new BasicDBObject();

        whereQuery.put("name", name);
        collection.findAndRemove(whereQuery);

    }

    @Override
    public ArrayList<Audio> getAll() {

        ArrayList<Audio> configurations = new ArrayList<>();
        DBCursor dbcursor;
        dbcursor = collection.find();
        while (dbcursor.hasNext()) {
            configurations.add((Audio)dbcursor.next());
        }

        return configurations;
    }

    @Override
    public ArrayList<String> loadAllNames() {
        ArrayList<String> allConfigurationNames = new ArrayList<>();

        DBCursor dbcursor;
        dbcursor = collection.find();
        Audio audio = new Audio();
        while (dbcursor.hasNext()) {
            audio = (Audio) dbcursor.next();
            allConfigurationNames.add(audio.getName());
        }
        return allConfigurationNames;
    }
}
