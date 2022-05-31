package com.finger.transaction.services;

import com.finger.transaction.models.Transaction;
import com.finger.transaction.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;
    public Transaction save(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public List<Transaction> getAll() {
        return (List<Transaction>) transactionRepository.findAll();
    }
}
