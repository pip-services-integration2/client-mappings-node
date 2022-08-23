const assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { IMappingsClient } from '../../src/version1/IMappingsClient';

export class MappingsClientV1Fixture {
    private _client: IMappingsClient;

    constructor(persistence) {
        assert.isNotNull(persistence);
        this._client = persistence;
    }

    public async testGetMappingCollections() {
        // Add mappings
        await this._client.addMapping(null, "Common.Collection", "123", "789", 60 * 1000);
        await this._client.addMapping(null, "Common.AnotherCollection", "123", "543", 60 * 1000);
        await this._client.addMapping(null, "Common.Collection", "ABC", "XYZ", 60 * 1000);

        let items = await this._client.getCollectionNames(null);

        assert.equal(2, items.length);
        assert.include(items, "Common.Collection");
        assert.include(items, "Common.AnotherCollection");
    }

    public async testGetMappings() {
        // Add mappings
        await this._client.addMapping(null, "Common.Collection", "123", "789", 60 * 1000);
        await this._client.addMapping(null, "Common.AnotherCollection", "123", "543", 60 * 1000);
        await this._client.addMapping(null, "Common.Collection", "ABC", "XYZ", 60 * 1000);
        await this._client.addMapping(null, "Common.Collection", "AAA", "111", 60 * 1000);

        let mappings = await this._client.getMappings(null, FilterParams.fromTuples("collection", "Common.Collection"), new PagingParams(1, 10, false));

        assert.isNotNull(mappings.data);
        assert.equal(2, mappings.data.length);
    }

    public async testMapping() {
        // Add mappings
        await this._client.addMapping(null, "Common.Collection", "123", "789", 60 * 1000);
        await this._client.addMapping(null, "Common.AnotherCollection", "123", "543", 60 * 1000);
        await this._client.addMapping(null, "Common.Collection", "ABC", "XYZ", 60 * 1000);

        // Test internal mappings
        let id = await this._client.mapToExternal(null, "Common.Collection", "123");
        assert.equal("789", id);

        // Test external mappings
        id = await this._client.mapToInternal(null, "Common.Collection", "789");
        assert.equal("123", id);

        // Test different collection
        id = await this._client.mapToExternal(null, "Common.AnotherCollection", "123");
        assert.equal("543", id);

        // Test non-exiting collection
        id = await this._client.mapToExternal(null, "Common.YetAnotherCollection", "123");
        assert.isNull(id);

        // Test non-exiting mapping
        id = await this._client.mapToExternal(null, "Common.Collection", "555");
        assert.isNull(id);
    }
}
