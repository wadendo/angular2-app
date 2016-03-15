package application.dao;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;

import java.net.UnknownHostException;
import java.util.ArrayList;

/**
 * Created by wadendo on 15/03/16.
 */
public class ConfigurationDAOImpl implements ConfigurationDAO {


    DBCollection collection;

    public ConfigurationDAOImpl() throws UnknownHostException {
        MongoClient mongoClient  = new MongoClient(new ServerAddress("localhost", 27017));
        DB database = mongoClient.getDB("BDmedias");
        collection = database.getCollection("medias");

    }


    @Override
    public void save(String audioURL) {

    }

    @Override
    public String get(String name) {
        return null;
    }

    @Override
    public void delete(String name) {

    }

    @Override
    public ArrayList<String> getAll() {
        return null;
    }

    @Override
    public ArrayList<String> loadAllNames() {
        return null;
    }
}
