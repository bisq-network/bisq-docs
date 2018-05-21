const _ = require('lodash');
const $http = require('http-as-promised');

const threshold = 0.1;

//tag::getPriceFilter[]
function getPriceFilter(marketPrice) {
    const maxPrice = marketPrice * (1 - threshold) * 10000;
    return offer => {
        if (offer.useMarketBasedPrice)
            return offer.marketPriceMargin >= threshold;
        return offer.price < maxPrice;
    }
}
//end::getPriceFilter[]

//tag::getMarketPrice[]
function getMarketPrice() {
    return $http.get('http://localhost:8080/api/v1/currencies/prices?currencyCodes=EUR', {resolve: 'body', json: true})
            .then(body => _.get(body, 'prices.EUR'))
}
//end::getMarketPrice[]

//tag::getOffers[]
function getOffers() {
    return $http.get('http://localhost:8080/api/v1/offers', {resolve: 'body', json: true}).then(body => body.offers);
}
//end::getOffers[]

function notify(offers) {
    if (!offers.length) {
        console.log('No interesting offers found');
        return;
    }

    const text = _.map(offers, offer => `${offer.amount / 100000000} BTC (-${_.round(offer.margin * 100, 2)}%)`).join('\n');
    console.info(text);
}

//tag::filterOffers[]
function filterOffers([offers, marketPrice]) {
    return _(offers)
            .filter({
                baseCurrencyCode: 'BTC',
                counterCurrencyCode: 'EUR',
                direction: 'SELL',
                paymentMethodId: 'SEPA'
            })
            .filter(i => _.includes(i.acceptedCountryCodes, 'PL'))
            .filter(getPriceFilter(marketPrice))
            .map(i => _.pick(i, 'baseCurrencyCode', 'counterCurrencyCode', 'direction', 'paymentMethodId', 'id', 'useMarketBasedPrice', 'price', 'marketPriceMargin', 'amount', 'minAmont'))
            .map(i => ({amount: i.amount, margin: i.useMarketBasedPrice ? i.marketPriceMargin : marketPrice / i.price}))
            .value();
}
//end::filterOffers[]

//tag::flow[]
Promise.all([getOffers(), getMarketPrice()])
        .then(filterOffers)
        .then(notify)
        .catch(e => console.error(e));
//end::flow[]
