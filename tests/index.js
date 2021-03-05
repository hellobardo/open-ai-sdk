const {OpenAI} = require('../index');
const assert = require('assert').strict;

describe("Completion", function () {

    it("should return a completion", function (done) {

        this.timeout(30000);
        const oi = new OpenAI('sk-XdZ7V98PC6ZelW4qUfDWIhTHou3yuktumQxCIB8C')
        oi.completion('davinci', {
            prompt    : 'This a test ...',
            max_tokens: 5
        }).then(response => {
            done();
        }).catch(error => {
            done(error)
        })

    })

});

describe("Search", function () {

    it("should return a search", function (done) {

        this.timeout(30000);
        const oi = new OpenAI('sk-XdZ7V98PC6ZelW4qUfDWIhTHou3yuktumQxCIB8C')
        oi.search('davinci', {
            documents: [
                "White House",
                "hospital",
                "school"
            ],
            query: "The president"
        }).then(response => {
            done();
        }).catch(error => {
            done(error)
        })

    })

});

describe("Engines", function () {

    it("should return a list of engines", function (done) {

        this.timeout(30000);
        const oi = new OpenAI('sk-XdZ7V98PC6ZelW4qUfDWIhTHou3yuktumQxCIB8C')
        oi.getEngines()
            .then(response => {
                done();
            })
            .catch(error => {
                done(error)
            })

    })

    it("should return a single engine", function (done) {

        this.timeout(30000);
        const oi = new OpenAI('sk-XdZ7V98PC6ZelW4qUfDWIhTHou3yuktumQxCIB8C')
        oi.getEngine('ada')
            .then(response => {
                done();
            })
            .catch(error => {
                done(error)
            })

    })

})