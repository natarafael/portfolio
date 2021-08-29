import { v4 as uuidv4 } from 'uuid';
import Stocks from '../images/stocks.png';
import Crypto from '../images/crypto.png';
import Weather from '../images/weathercroped.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Stocks Market Graph',
    desc:
      'An application to track all stocks prices data from one place. I developed the website responsive',
    img: Stocks,
    link: 'https://github.com/natarafael/stocks-cryptocoins-market.git',
  },
  {
    id: uuidv4(),
    name: 'Cryptocoin value',
    desc:
      'Using this app you can track any e coin. I developed the website responsive',
    img: Crypto,
    link: 'https://github.com/natarafael/stocks-cryptocoins-market.git',
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc: 'With this App you can search the current weather from anywhere',
    img: Weather,
    link: 'https://github.com/natarafael/weather-app.git',
  },
];

export default projects;
