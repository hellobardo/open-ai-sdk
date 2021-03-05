import axios, {AxiosPromise} from "axios";
import {OpenAICompletion} from "./interfaces/OpenAICompletion"
import {OpenAISearch} from "./interfaces/OpenAISearch";
import {OpenAIHeaders} from "./interfaces/OpenAIHeaders";
import {OpenAIHeadersConfiguration} from "./interfaces/OpenAIHeadersConfiguration";

class OpenAI {

    _axios;

    constructor(public apiKey: string, public organizationKey?: string) {

        this._axios = axios.create({
            baseURL: 'https://api.openai.com/v1',
            headers: this.buildHeaders({authorization: apiKey, organization: organizationKey})
        });
    }

    private buildHeaders (headers: OpenAIHeadersConfiguration) : OpenAIHeaders {

        if (!! headers.organization) {
            return {
                'Authorization': `Bearer ${headers.authorization}`,
                'OpenAI-Organization': headers.organization
            }
        }

        return {
            'Authorization': `Bearer ${headers.authorization}`,
        }

    }

    getEngines(): AxiosPromise {

        return this._axios.get(`engines`);

    }

    getEngine(id: string): AxiosPromise {

        return this._axios.get(`engines/${id}`);

    }

    completion(engine: string, configuration: OpenAICompletion): AxiosPromise {

        return this._axios.post(`engines/${engine}/completions`, configuration);

    }

    search(engine: string, configuration: OpenAISearch): AxiosPromise {

        return this._axios.post(`engines/${engine}/search`, configuration);

    }

}

export {OpenAI}
