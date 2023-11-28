package com.pizzaShopBoys.app.service;

// import com.pizzaShopBoys.app.model.PriceHistory;
import com.pizzaShopBoys.app.dto.CategoryDTO;
import com.pizzaShopBoys.app.dto.ProductDTO;
import com.pizzaShopBoys.app.model.Product;
import com.pizzaShopBoys.app.model.ProductVariant;
import com.pizzaShopBoys.app.repository.ProductRepository;
import com.pizzaShopBoys.app.repository.PriceHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
// import java.time.LocalDateTime;
// import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    PriceHistoryRepository priceHistoryRepository;

    // CREATE
//    @Transactional
//    public Optional<Product> createProduct(Product product) {
//        var prod = productRepository.save(product);
//        priceHistoryRepository.createPriceHistoryById(product.getId(), product.getPrice(), LocalDate.now());
//        return Optional.of(prod);
//    }

    // READ
    public ArrayList<CategoryDTO> getAllProducts() {
        Map<String, CategoryDTO> categoryMap = new HashMap<>();
        List<Product> products = productRepository.findAll();
        System.out.println(products);
        for (Product product : products){
            String category = product.getCategory();

            CategoryDTO categoryDTO = categoryMap.computeIfAbsent(category, k ->new CategoryDTO(category,new ArrayList<>()));

            ProductDTO productDTO = getProductDTO(product);
            categoryDTO.addProduct(productDTO);
        }
        return new ArrayList<>(categoryMap.values());
    }

    private static ProductDTO getProductDTO(Product product) {
        ArrayList<String> sizes = new ArrayList<>();
        HashMap<String, Double> prices = new HashMap<>();
        List<ProductVariant> variants = product.getVariant();
        variants = new ArrayList<>(variants);

        for (ProductVariant variant: variants){
            sizes.add(variant.getServing());
            prices.put(variant.getServing(), variant.getPrice());
        }

        return new ProductDTO(product.getId(), product.getName(), sizes,prices);
    }


    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    // UPDATE
//    @Transactional
//    public Optional<Product> updateProduct(Product product) {
//        if (productRepository.existsById(product.getId())) {
//            // Update price history
//            priceHistoryRepository.updatePriceHistoryById(product.getId(), LocalDate.now());
//            priceHistoryRepository.createPriceHistoryById(product.getId(), product.getPrice(), LocalDate.now());
//            return Optional.of(productRepository.save(product));
//        } else
//            return Optional.empty();
//    }

    // DELETE
    public void deleteProductById(int id) {
        productRepository.deleteById(id);
    }

    public void deleteAllProducts() {
        productRepository.deleteAll();
    }
}
