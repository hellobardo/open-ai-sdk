import {AxiosPromise} from "axios";
import {OpenAICompletion} from "./src/interfaces/OpenAICompletion";
import {OpenAISearch} from "./src/interfaces/OpenAISearch";

export function getEngines(): AxiosPromise;
export function getEngine(engine: string): AxiosPromise;
export function completion(engine: string, configuration: OpenAICompletion): AxiosPromise;
export function search(engine: string, configuration: OpenAISearch): AxiosPromise;