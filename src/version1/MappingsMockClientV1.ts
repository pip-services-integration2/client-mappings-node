import { IMappingsClient } from "./IMappingsClient";
import { FilterParams, PagingParams, DataPage, IdGenerator } from "pip-services3-commons-nodex";
import { MappingV1 } from "./MappingV1";

export class MappingsMockClientV1 implements IMappingsClient {
    private _maxPageSize: number = 100;
    private _items: MappingV1[];
    private readonly _defaultTTL: number = 7 * 24 * 60 * 60 * 1000;

    public constructor(...items: MappingV1[]) {
        this._items = items;
    }

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        let collection = filter.getAsNullableString("collection");
        let id = filter.getAsNullableString("id");
        let internalId = filter.getAsNullableString("internal_id");
        let externalId = filter.getAsNullableString("external_id");
        let search = filter.getAsNullableString("search");

        return (item: MappingV1) => {
            if (collection != null && item.collection != collection)
                return false;
            if (id != null && item.external_id != id && item.internal_id != id)
                return false;
            if (internalId != null && item.internal_id != internalId)
                return false;
            if (externalId != null && item.external_id != externalId)
                return false;
            if (search != null && item.external_id != search && item.internal_id != search)
                return false;
            return true;
        };
    }

    public async getCollectionNames(correlationId: string): Promise<string[]> {
        let result: string[] = [];
        for (let mapping of this._items) {
            let collection = mapping.collection;
            if (result.indexOf(collection) < 0)
                result.push(collection);
        }
        return result;
    }

    public async getMappings(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MappingV1>> {
        let filterMappings = this.composeFilter(filter);
        let mappings = this._items.filter(filterMappings);

        // Extract a page
        paging = paging != null ? paging : new PagingParams();
        let skip = paging.getSkip(-1);
        let take = paging.getTake(this._maxPageSize);

        let total = null;
        if (paging.total)
            total = mappings.length;

        if (skip > 0)
            mappings = mappings.slice(skip);
        mappings = mappings.slice(0, take);

        let page = new DataPage<MappingV1>(mappings, total);
        return page;
    }

    public async addMapping(correlationId: string, collection: string, internalId: string, externalId: string, timeToLive: number): Promise<void> {
        let mapping: MappingV1;
        timeToLive = timeToLive > 0 ? timeToLive : this._defaultTTL;
        mapping = <MappingV1>{
            collection: collection,
            internal_id: internalId,
            external_id: externalId,
            expiration_time: new Date(new Date().getTime() + timeToLive)
        };
        if (mapping == null) {
            return;
        }
        mapping = Object.assign({}, mapping);
        mapping.id = mapping.id || IdGenerator.nextLong();
        this._items.push(mapping);
    }

    public async mapToExternal(correlationId: string, collection: string, internalId: string): Promise<string> {

        let result: string = null;

        let items = this._items.filter((m) => collection.localeCompare(m.collection) == 0 && internalId.localeCompare(m.internal_id) == 0);
        let mapping: MappingV1 = items.length > 0 ? items[0] : null;
        result = mapping != null && mapping.expiration_time > new Date() ? mapping.external_id : null;
        return result;
    }

    public async mapToInternal(correlationId: string, collection: string, externalId: string): Promise<string> {

        let result: string = null;
        let items = this._items.filter((m) => collection.localeCompare(m.collection) == 0 && externalId.localeCompare(m.external_id) == 0);
        let mapping: MappingV1 = items.length > 0 ? items[0] : null;
        result = mapping != null && mapping.expiration_time > new Date() ? mapping.internal_id : null;
        return result;
    }

    public async deleteMapping(correlationId: string, collection: string, internalId: string, externalId: string): Promise<void> {

        for (let index = this._items.length - 1; index >= 0; index--) {
            let mapping = this._items[index];
            if (mapping.collection == collection
                && mapping.internal_id == internalId
                && mapping.external_id == externalId) {
                this._items.splice(index, 1);
                break;
            }
        }
    }
}