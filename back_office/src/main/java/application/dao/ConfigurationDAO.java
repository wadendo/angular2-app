package application.dao;

import java.util.ArrayList;

/**
 * Created by wadendo on 15/03/16.
 */
public interface ConfigurationDAO {
    public void save(String audioURL);

    public String get(String name);

    public void delete(String name);

    public ArrayList<String> getAll();

    public ArrayList<String> loadAllNames();
}
