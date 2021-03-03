import axios, {AxiosPromise} from "axios";
import {OpenAICompletion} from "./interfaces/OpenAICompletion"
import {OpenAISearch} from "./interfaces/OpenAISearch";

class OpenAI {

    openApiURL = 'https://api.openai.com/v1';

    constructor(public apiKey: string) {
    }

    getEngines(): AxiosPromise {

        return axios.get(`${this.openApiURL}/engines`, {
            headers: {
                authorization: `Bearer ${this.apiKey}`
            }
        });

    }

    getEngine(id: string): AxiosPromise {

        return axios.get(`${this.openApiURL}/engines/${id}`, {
            headers: {
                authorization: `Bearer ${this.apiKey}`
            }
        });

    }

    completion(engine: string, configuration: OpenAICompletion): AxiosPromise {

        return axios.post(`${this.openApiURL}/engines/${engine}/completions`, configuration, {
            headers: {
                authorization: `Bearer ${this.apiKey}`
            }
        });

    }

    search(engine: string, configuration: OpenAISearch): AxiosPromise {

        return axios.post(`${this.openApiURL}/engines/${engine}/search`, configuration, {
            headers: {
                authorization: `Bearer ${this.apiKey}`
            }
        });

    }

}

export default OpenAI;
