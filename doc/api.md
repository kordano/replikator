# Replikator Components

## `LwwrReplikator`

React Component using Last Writer Wins Register as replication data type.

### Properties (mandatory)

- `atom`: initial state, will be updated with latest register
- `userId`: user identifier
- `crdtId`: CRDT identifier
- `uri`: remote server peer URI

### Example

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {LwwrReplikator} from "Replikator";

const userId = "mail:alice@stechuhr.de";
const lwwrId = "07f6aae2-2b46-4e44-bfd8-058d13977a8a"; // UUID as string
const uri = "ws://localhost:31778";
const lwwrReplikator = <LwwrReplikator 
                         atom={0} 
                         userId={userId} 
                         crdtId={lwwrId} 
                         uri={uri}>
                         <App/>
                       </LwwrReplikator>

ReactDOM.render(lwwrReplikator, document.getElementById('root'));
```

## `ORMapReplikator`

React Component using Observed Remove Map as replication data type.

### Properties

- `atom`: initial state, will be updated with latest register
- `userId`: user identifier
- `crdtId`: CRDT identifier
- `uri`: remote server peer URI
- `evalFunctions`: evalution function object, containing id and function that can be applied to local ormap

### Example
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ORMapReplikator} from "Replikator";

const userId = "mail:alice@stechuhr.de";
const lwwrId = "07f6aae2-2b46-4e44-bfd8-058d13977a8a"; // UUID as string
const uri = "ws://localhost:31778";
const evalFunctions = {"add": function(supervisor, old, params) {
  let counter = old.counter;
  return {counter: counter + 1};
}}

const ormapReplikator = <ORMapReplikator 
                         atom={0} 
                         userId={userId} 
                         crdtId={lwwrId} 
                         evalFunctions={evalFunctions}
                         uri={uri}>
                         <App/>
                       </ORMapReplikator>

ReactDOM.render(ORMapReplikator, document.getElementById('root'));
```
