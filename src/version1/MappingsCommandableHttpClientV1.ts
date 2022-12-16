import { IMappingsClient } from "./IMappingsClient";
import { DataPage, FilterParams, PagingParams } from "pip-services3-commons-nodex";
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { MappingV1 } from "service-mappings-node";

export class MappingsCommandableHttpClientV1 extends CommandableHttpClient implements IMappingsClient {

    public constructor() {
        super('v1/mappings');
    }

    public async getCollectionNames(correlationId: string): Promise<string[]> {
        return await this.callCommand(
            'get_collection_names',
            correlationId,
            {}
        );
    }

    public async getMappings(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MappingV1>> {
        return await this.callCommand(
            'get_mappings',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async addMapping(correlationId: string, collection: string, internalId: string, externalId: string, timeToLive: number): Promise<void> {
        return await this.callCommand(
            'add_mapping',
            correlationId,
            {
                collection: collection,
                internal_id: internalId,
                external_id: externalId,
                ttl: timeToLive
            }
        );
    }

    public async mapToExternal(correlationId: string, collection: string, internalId: string): Promise<string> {
        return await this.callCommand(
            'map_to_external',
            correlationId,
            {
                collection: collection,
                internal_id: internalId
            }
        );
    }

    public async mapToInternal(correlationId: string, collection: string, externalId: string): Promise<string> {
        return await this.callCommand(
            'map_to_internal',
            correlationId,
            {
                collection: collection,
                external_id: externalId
            }
        );
    }

    public async deleteMapping(correlationId: string, collection: string, internalId: string, externalId: string): Promise<void> {
        return await this.callCommand(
            'map_to_internal',
            correlationId,
            {
                collection: collection,
                external_id: externalId
            }
        );
    }
}