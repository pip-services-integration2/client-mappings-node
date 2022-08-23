import { IMappingsClient } from "./IMappingsClient";
import { FilterParams, PagingParams, DataPage } from "pip-services3-commons-nodex";
import { DirectClient } from 'pip-services3-rpc-nodex';
import { MappingV1 } from "service-mappings-node";
export declare class MappingsDirectClientV1 extends DirectClient<any> implements IMappingsClient {
    constructor();
    getCollectionNames(correlationId: string): Promise<string[]>;
    getMappings(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MappingV1>>;
    addMapping(correlationId: string, collection: string, internalId: string, externalId: string, timeToLive: number): Promise<void>;
    mapToExternal(correlationId: string, collection: string, internalId: string): Promise<string>;
    mapToInternal(correlationId: string, collection: string, externalId: string): Promise<string>;
    deleteMapping(correlationId: string, collection: string, internalId: string, externalId: string): Promise<void>;
}
