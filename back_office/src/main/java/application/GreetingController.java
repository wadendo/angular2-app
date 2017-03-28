package application;

import java.net.UnknownHostException;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import application.dao.ConfigurationDAO;
import application.dao.ConfigurationDAOImpl;
import application.pojo.Audio;

@RestController
public class GreetingController {

    private static final String TEMPLATE = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private ConfigurationDAO configurationDAO;

    {
        try {
            configurationDAO = new ConfigurationDAOImpl();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(),
                String.format(TEMPLATE, name));
    }

    @RequestMapping("/getall")
    public List<Audio> greeting() {
        return configurationDAO.getAll();
    }
}