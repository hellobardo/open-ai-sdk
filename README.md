# OPEN-AI-SDK

A library that wraps the Open AI API built in TypeScript

## Installation

`npm i @hellobardo/open-ai-sdk`

## Usage

### Completion

Completion takes 2 parameters

- engine: a string representing the engine to be used
- configuration: an object with the configuration to be sent described here
  -> https://beta.openai.com/docs/api-reference/create-completion

```js
const {OpenAI} = require("@hellobardo/open-ai-sdk");

const oa = new OpenAI('YOUR_API_KEY', 'ORGANIZATION_KEY_IF_ANY')

oa.completion('davinci', {
    prompt    : 'This is a ...',
    max_tokens: 5
})
    .then(response => console.log(response.data))
    .catch(e => console.error(e))
```

### Search

Search takes 2 parameters

- engine: a string representing the engine to be used
- configuration: an object with the search configuration

```js
const {OpenAI} = require("@hellobardo/open-ai-sdk");

const oa = new OpenAI('YOUR_API_KEY', 'ORGANIZATION_KEY_IF_ANY')

oa.search('davinci', {
    documents: [
        "White House",
        "hospital",
        "school"
    ],
    query    : "the president"
})
    .then(response => console.log(response.data))
    .catch(e => console.error(e))
```

### Get Engines

Retrieve all engines

```js
const {OpenAI} = require("@hellobardo/open-ai-sdk");

const oa = new OpenAI('YOUR_API_KEY', 'ORGANIZATION_KEY_IF_ANY')

oa.getEngines()
    .then(response => console.log(response.data))
    .catch(e => console.error(e))
```

### Get Engine

Retrieve a single engine
```js
const {OpenAI} = require("@hellobardo/open-ai-sdk");

const oa = new OpenAI('YOUR_API_KEY', 'ORGANIZATION_KEY_IF_ANY')

oa.getEngine('davinci')
        .then(response => console.log(response.data))
        .catch(e => console.error(e))
```