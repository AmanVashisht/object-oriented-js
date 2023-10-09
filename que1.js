// Create a BankAccount class in JavaScript using Object-Oriented Programming (OOP) principles. The class 
// should have methods for depositing, withdrawing, and checking the account balance. Ensure that account 
// balances cannot go below zero and that both deposit and withdrawal amounts must be positive.

class BankAccount{
    constructor(){
        this.balance=0;
    }

    deposit(amount){
        if(amount>0){
            this.balance +=amount
            console.log(`Deposited Rs.${amount}. New balance: Rs.${this.balance}`)
        }else{
            console.log(`Invalid deposit amount. Please enter a positive amount.`)
        }
    }

    withdrawing(amount){
        if(amount>0){
            if(this.balance>amount){
                this.balance -=amount
                console.log(`Withdrawn Rs.${amount}. New balance: Rs.${this.balance}`)
            }else{
                console.log(`Insufficient funds. Cannot withdraw.`)
            }
        }
        else{
            console.log(`Invalid deposit amount. Please enter a positive amount.`)
        }        
    }

    checkbalance(){
        console.log(`Current balance is $${this.balance}.`)
    }
}

const myAccount = new BankAccount('Mithun S',1000)

myAccount.checkbalance();

myAccount.deposit(500)
myAccount.deposit(-50)

myAccount.withdrawing(200)
myAccount.withdrawing(1500)
myAccount.withdrawing(-500)

myAccount.checkbalance();