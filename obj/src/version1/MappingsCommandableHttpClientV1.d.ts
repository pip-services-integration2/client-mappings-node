import { IMappingsClient } from "./IMappingsClient";
import { DataPage, FilterParams, PagingParams } from "pip-services3-commons-nodex";
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { MappingV1 } from "service-mappings-node";
export declare class MappingsCommandableHttpClientV1 extends CommandableHttpClient implements IMappingsClient {
    constructor();
    getCollectionNames(correlationId: string): Promise<string[]>;
    getMappings(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MappingV1>>;
    addMapping(correlationId: string, collection: string, internalId: string, externalId: string, timeToLive: number): Promise<void>;
    mapToExternal(correlationId: string, collection: string, internalId: string): Promise<string>;
    mapToInternal(correlationId: string, collection: string, externalId: string): Promise<string>;
    deleteMapping(correlationId: string, collection: string, internalId: string, externalId: string): Promise<void>;
}
