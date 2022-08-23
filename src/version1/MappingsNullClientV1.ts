import { IMappingsClient } from "./IMappingsClient";
import { FilterParams, PagingParams, DataPage } from "pip-services3-commons-nodex";
import { MappingV1 } from "./MappingV1";


export class MappingsNullClientV1 implements IMappingsClient {
    public async getCollectionNames(correlationId: string): Promise<string[]> {
        return new Array<string>();
    }
    public async getMappings(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MappingV1>> {
        return new DataPage<MappingV1>();
    }
    public async addMapping(correlationId: string, collection: string, internalId: string, externalId: string, timeToLive: number): Promise<void> {
        return null;
    }
    public async mapToExternal(correlationId: string, collection: string, internalId: string): Promise<string> {
        return null;
    }
    public async mapToInternal(correlationId: string, collection: string, externalId: string): Promise<string> {
        return null;
    }
    public async deleteMapping(correlationId: string, collection: string, internalId: string, externalId: string): Promise<void> {
        return null;
    }


}