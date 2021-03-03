"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var OpenAI = /** @class */ (function () {
    function OpenAI(apiKey) {
        this.apiKey = apiKey;
        this.openApiURL = 'https://api.openai.com/v1';
    }
    OpenAI.prototype.getEngines = function () {
        return axios_1.default.get(this.openApiURL + "/engines", {
            headers: {
                authorization: "Bearer " + this.apiKey
            }
        });
    };
    OpenAI.prototype.getEngine = function (id) {
        return axios_1.default.get(this.openApiURL + "/engines/" + id, {
            headers: {
                authorization: "Bearer " + this.apiKey
            }
        });
    };
    OpenAI.prototype.completion = function (engine, configuration) {
        return axios_1.default.post(this.openApiURL + "/engines/" + engine + "/completions", configuration, {
            headers: {
                authorization: "Bearer " + this.apiKey
            }
        });
    };
    OpenAI.prototype.search = function (engine, configuration) {
        return axios_1.default.post(this.openApiURL + "/engines/" + engine + "/search", configuration, {
            headers: {
                authorization: "Bearer " + this.apiKey
            }
        });
    };
    return OpenAI;
}());
exports.default = OpenAI;
