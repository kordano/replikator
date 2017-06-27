import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ORMapReplikator from "./node_modules/components/ORMapReplikator/ORMapReplikator.js";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const userId = "mail:alice@stechuhr.de";
const ormapId = "07f6aae2-2b46-4e44-bfd8-058d13977a8a";
const uri = "ws://localhost:31778";
const evalFunctions = {"add": function(supervisor, old, params) {
  let transactions = old.transactions;
  transactions.push(params);
  return {transactions};
}}

ReactDOM.render(<ORMapReplikator atom={{transactions: []}} userId={userId} ormapId={ormapId} evalFunctions={evalFunctions} uri={uri}><App/></ORMapReplikator>,
                document.getElementById('root'));

registerServiceWorker();
