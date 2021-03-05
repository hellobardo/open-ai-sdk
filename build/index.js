"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAI = void 0;
var axios_1 = __importDefault(require("axios"));
var OpenAI = /** @class */ (function () {
    function OpenAI(apiKey, organizationKey) {
        this.apiKey = apiKey;
        this.organizationKey = organizationKey;
        this._axios = axios_1.default.create({
            baseURL: 'https://api.openai.com/v1',
            headers: this.buildHeaders({ authorization: apiKey, organization: organizationKey })
        });
    }
    OpenAI.prototype.buildHeaders = function (headers) {
        if (!!headers.organization) {
            return {
                'Authorization': "Bearer " + headers.authorization,
                'OpenAI-Organization': headers.organization
            };
        }
        return {
            'Authorization': "Bearer " + headers.authorization,
        };
    };
    OpenAI.prototype.getEngines = function () {
        return this._axios.get("engines");
    };
    OpenAI.prototype.getEngine = function (id) {
        return this._axios.get("engines/" + id);
    };
    OpenAI.prototype.completion = function (engine, configuration) {
        return this._axios.post("engines/" + engine + "/completions", configuration);
    };
    OpenAI.prototype.search = function (engine, configuration) {
        return this._axios.post("engines/" + engine + "/search", configuration);
    };
    return OpenAI;
}());
exports.OpenAI = OpenAI;
