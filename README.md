# Currency Exchange

Simple app to convert SEK to different currencies.

## Installation

Clone the project and install dependencies by the command below:

```sh
yarn
```

This app uses two different APIs:

- https://restcountries.eu for country information.
- http://fixer.io for exchange rates.
  <br>

For the second one you need to get an API key to be able to fetch the exchange rates. After generating your own API key, rename the `.env.exmaple` to `.env`. Then, assign the API key to `REACT_APP_CURRENCY_API_KEY` variable.

```env
PORT=3003
REACT_APP_COUNTRY_BASE_URL=https://restcountries.eu/rest/v2/all
REACT_APP_CURRENCY_BASE_URL=http://data.fixer.io/api/latest
REACT_APP_CURRENCY_API_KEY=<YOUR GENERATED API KEY>
```

> NOTE: You can also change the running port for the development by changing the `PORT` value in the file.

## Start development

To start development run command below:

```sh
yarn start
```

## Build production

To build for production:

```sh
yarn build
```

## Todo

The things need to be done if there was more time.

- [ ] Writing test cases (e2e and unit).
- [ ] Implementing error handling on API failure and possible component exceptions.
- [ ] Converting the target currency to SEK.
- [ ] Adding dark mode theme with `styled-component`.
- [ ] Re-thinking about the components' naming.
- [ ] Adding `storybook` for visual documentation.
- [ ] Improving not found page.
