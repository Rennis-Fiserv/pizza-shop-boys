package com.pizzaShopBoys.app.service;

import com.pizzaShopBoys.app.model.PriceHistory;
import com.pizzaShopBoys.app.repository.PriceHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PriceHistoryService {
    @Autowired

    PriceHistoryRepository priceHistoryRepository;

    // CREATE
    public Optional<PriceHistory> createPriceHistory(PriceHistory priceHistory) {
        return Optional.of(priceHistoryRepository.save(priceHistory));
    }

    // READ
    public List<PriceHistory> getAllPriceHistorys() {
        return priceHistoryRepository.findAll();
    }

    public Optional<PriceHistory> getPriceHistoryById(int id) {
        return priceHistoryRepository.findById(id);
    }

    // UPDATE
    public Optional<PriceHistory> updatePriceHistory(PriceHistory priceHistory) {
        if (priceHistoryRepository.existsById(priceHistory.getId())) {
            return Optional.of(priceHistoryRepository.save(priceHistory));
        } else
            return Optional.empty();
    }

    // DELETE
    public void deletePriceHistoryById(int id) {
        priceHistoryRepository.deleteById(id);
    }

    public void deleteAllPriceHistory() {
        priceHistoryRepository.deleteAll();
    }

}
