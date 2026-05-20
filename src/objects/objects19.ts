export const product = {
    price: 100,
    withTaxRate(rate: number) {
        // Возвращаем новый объект с копией свойств исходного и добавленным taxAmount = price * rate
        return {
            ...this,
            taxAmount: this.price * rate,
        };
    },
};

