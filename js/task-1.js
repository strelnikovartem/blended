/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  balanse: 0,
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */

  createTransaction(amount, type) {
    return {
      id: Date.now(),
      amount,
      type,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */

  deposit(amount) {
    this.balanse += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */

  withdraw(amount) {
    if (amount > this.balanse) {
      return `недостатньо коштів`;
    }
    this.balanse -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод повертає поточний баланс
   */

  getDeposit() {},

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */

  getTransactionDetails(id) {},

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */

  getTransactionTotal(type) {},
};

account.deposit(200);
account.deposit(400);

account.withdraw(800);
// account.withdraw(200);

// // console.log(account.getBalance());
// console.log(account.getTransactionDetails(100));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log(account);
// console.log(account.getDeposit());
