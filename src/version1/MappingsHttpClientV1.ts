import { IMappingsClient } from "./IMappingsClient";
import { DataPage, FilterParams, PagingParams } from "pip-services3-commons-nodex";
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { MappingV1 } from "service-mappings-node";

export class MappingsHttpClientV1 extends CommandableHttpClient implements IMappingsClient {

    public constructor() {
        super('v1/mappings');
    }

    public async getCollectionNames(correlationId: string): Promise<string[]> {
        let timing = this.instrument(correlationId, 'mappings.get_collection_names');

        try {
            return await this.callCommand(
                'get_collection_names',
                correlationId,
                {}
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getMappings(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MappingV1>> {
        let timing = this.instrument(correlationId, 'mappings.get_mappings');

        try {
            return await this.callCommand(
                'get_mappings',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async addMapping(correlationId: string, collection: string, internalId: string, externalId: string, timeToLive: number): Promise<void> {
        let timing = this.instrument(correlationId, 'mappings.add_mapping');

        try {
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
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async mapToExternal(correlationId: string, collection: string, internalId: string): Promise<string> {
        let timing = this.instrument(correlationId, 'mappings.map_to_external');

        try {
            return await this.callCommand(
                'map_to_external',
                correlationId,
                {
                    collection: collection,
                    internal_id: internalId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async mapToInternal(correlationId: string, collection: string, externalId: string): Promise<string> {
        let timing = this.instrument(correlationId, 'mappings.map_to_internal');

        try {
            return await this.callCommand(
                'map_to_internal',
                correlationId,
                {
                    collection: collection,
                    external_id: externalId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteMapping(correlationId: string, collection: string, internalId: string, externalId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'mappings.map_to_internal');

        try {
            return await this.callCommand(
                'map_to_internal',
                correlationId,
                {
                    collection: collection,
                    external_id: externalId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}