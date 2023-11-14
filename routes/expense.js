var express = require('express');
var router = express.Router();
const Expense = require('../models/expenseModel');


router.post('/create-expense', async (req, res) => {
    try {
        const expense = new Expense(req.body);
        req.user.expenses.push(expense._id);
        expense.user = req.user._id;
        // console.log(expense);
        // res.json(expense);
        await expense.save();
        await req.user.save();
        res.redirect("/profile");
    } catch (error) {
        res.send(error);
}
});


module.exports = router;