package application.dao;

import application.pojo.Audio;

import java.util.ArrayList;

/**
 * Created by wadendo on 15/03/16.
 */
public interface ConfigurationDAO {
    public void save(Audio audio);

    public Audio get(String name);

    public void delete(String name);

    public ArrayList<Audio> getAll();

    public ArrayList<String> loadAllNames();
}
