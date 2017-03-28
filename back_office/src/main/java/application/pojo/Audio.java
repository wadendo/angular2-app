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

}
