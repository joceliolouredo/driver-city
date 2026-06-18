class DatabaseMock {
    constructor() {
        this.users = {};
    }

    async updateWallet(userId, moneyGained, coinsGained) {
        if (!this.users[userId]) {
            this.users[userId] = { id: userId, balanceBRL: 0, driverCoins: 1000 };
        }
        this.users[userId].balanceBRL += moneyGained;
        this.users[userId].driverCoins += coinsGained;
        return this.users[userId];
    }

    async getUserData(userId) {
        return this.users[userId] || { id: userId, balanceBRL: 0, driverCoins: 1000 };
    }
}

module.exports = new DatabaseMock();
