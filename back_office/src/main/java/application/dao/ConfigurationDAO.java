package application.dao;

import java.util.List;

import application.pojo.Audio;

/**
 * Created by wadendo on 15/03/16.
 */
public interface ConfigurationDAO {
    public void save(Audio audio);

    public Audio get(String name);

    public void delete(String name);

    public List<Audio> getAll();

    public List<String> loadAllNames();
}
