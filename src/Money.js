class Money {

    amount;
    currency;
    constructor(amount, currency){
        this.amount = amount;
        this.currency = currency;
    }

    /**
     *
     * @param {Money} money
     * @returns {null}
     */
     add(money){
        let amount = money.getamount();
        let currency = money.getcurrency();
        if ( currency === this.currency){
            return new Money(this.amount+amount,this.currency);
        } else {
            throw new Error();
        }
    }
    getamount() {
        return this.amount;
    }

    getcurrency() {
        return this.currency;
    }
}