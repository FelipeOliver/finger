package com.finger.transaction.apis;


import com.finger.transaction.models.Transaction;
import com.finger.transaction.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
public class TransactionAPI {

    @Autowired
    private TransactionService transactionService;

    @PostMapping
    public Transaction post(@RequestBody Transaction transaction) {
        return transactionService.save(transaction);
    }

    @GetMapping
    public List<Transaction> getAll() {
        return transactionService.getAll();
    }
}
