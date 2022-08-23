import { IMappingsClient } from "./IMappingsClient";
import { FilterParams, PagingParams, Descriptor, DataPage } from "pip-services3-commons-nodex";
import { DirectClient } from 'pip-services3-rpc-nodex';
import { MappingV1 } from "service-mappings-node";

export class MappingsDirectClientV1 extends DirectClient<any> implements IMappingsClient {
    
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor('service-mappings', 'controller', '*', '*', '1.0'));
    }

    public async getCollectionNames(correlationId: string): Promise<string[]> {
        let timing = this.instrument(correlationId, 'mappings.get_collections_names');
        
        try {
            return await this._controller.getCollectionNames(correlationId);
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
            return await this._controller.getMappings(correlationId, filter, paging);
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
            return await this._controller.addMapping(correlationId, collection, internalId, externalId, timeToLive);
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
            return await this._controller.mapToExternal(correlationId, collection, internalId);
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
            return await this._controller.mapToInternal(correlationId, collection, externalId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteMapping(correlationId: string, collection: string, internalId: string, externalId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'mappings.delete_mapping');

        try {
            return await this._controller.deleteMapping(correlationId, collection, internalId, externalId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}