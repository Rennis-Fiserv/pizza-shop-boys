package com.pizzaShopBoys.app.service;
import com.pizzaShopBoys.app.model.ZIP;
import com.pizzaShopBoys.app.model.ZIP;
import com.pizzaShopBoys.app.repository.ZIPRepository;
import com.pizzaShopBoys.app.repository.ZIPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ZIPService {
    @Autowired

     ZIPRepository zip_Repository;

//    CREATE
    public Optional<ZIP> createZIP(ZIP ZIP){
    return Optional.of(zip_Repository.save(ZIP));
}

//    READ
    public List<ZIP> getAllZIPs(){
    return zip_Repository.findAll();
}
    public Optional<ZIP> getZIPById(int id){
        return zip_Repository.findById(id);
    }

//    UPDATE
    public Optional<ZIP> updateZIP(ZIP ZIP){
        if(zip_Repository.existsById(ZIP.getId())){
            return Optional.of(zip_Repository.save(ZIP));
        }
        else return Optional.empty();
    }

//    DELETE
    public void deleteZIPById(int id){
        zip_Repository.deleteById(id);
    }

    public void deleteAllZIP(){
        zip_Repository.deleteAll();
    }

}
