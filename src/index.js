import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ORMapReplikator from "./node_modules/components/Replikator/ORMapReplikator";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const userId = "mail:alice@stechuhr.de";
const ormapId = "07f6aae2-2b46-4e44-bfd8-058d13977a8a";
const uri = "ws://localhost:31778";

ReactDOM.render(<ORMapReplikator
                  userId={userId}
                  ormapId={ormapId}
                  uri={uri}>
                  <App />
                </OrMapReplikator>,
                document.getElementById('root'));

registerServiceWorker();
