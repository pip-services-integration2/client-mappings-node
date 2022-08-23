"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingsHttpClientV1 = void 0;
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class MappingsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor() {
        super('v1/mappings');
    }
    getCollectionNames(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'mappings.get_collection_names');
            try {
                return yield this.callCommand('get_collection_names', correlationId, {});
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getMappings(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'mappings.get_mappings');
            try {
                return yield this.callCommand('get_mappings', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    addMapping(correlationId, collection, internalId, externalId, timeToLive) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'mappings.add_mapping');
            try {
                return yield this.callCommand('add_mapping', correlationId, {
                    collection: collection,
                    internal_id: internalId,
                    external_id: externalId,
                    ttl: timeToLive
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    mapToExternal(correlationId, collection, internalId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'mappings.map_to_external');
            try {
                return yield this.callCommand('map_to_external', correlationId, {
                    collection: collection,
                    internal_id: internalId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    mapToInternal(correlationId, collection, externalId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'mappings.map_to_internal');
            try {
                return yield this.callCommand('map_to_internal', correlationId, {
                    collection: collection,
                    external_id: externalId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteMapping(correlationId, collection, internalId, externalId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'mappings.map_to_internal');
            try {
                return yield this.callCommand('map_to_internal', correlationId, {
                    collection: collection,
                    external_id: externalId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.MappingsHttpClientV1 = MappingsHttpClientV1;
//# sourceMappingURL=MappingsHttpClientV1.js.map