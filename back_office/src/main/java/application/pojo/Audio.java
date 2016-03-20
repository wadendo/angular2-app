package application.pojo;

import lombok.Data;

/**
 * Created by wadendo on 20/03/16.
 */
@Data
public class Audio implements Media {
    private Object _id;

    private String name;

    private String url;

    public Object get_id() {
        return _id;
    }

    public void set_id(Object _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
