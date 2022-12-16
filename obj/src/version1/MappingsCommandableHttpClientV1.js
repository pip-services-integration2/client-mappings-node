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
exports.MappingsCommandableHttpClientV1 = void 0;
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class MappingsCommandableHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor() {
        super('v1/mappings');
    }
    getCollectionNames(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_collection_names', correlationId, {});
        });
    }
    getMappings(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_mappings', correlationId, {
                filter: filter,
                paging: paging
            });
        });
    }
    addMapping(correlationId, collection, internalId, externalId, timeToLive) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('add_mapping', correlationId, {
                collection: collection,
                internal_id: internalId,
                external_id: externalId,
                ttl: timeToLive
            });
        });
    }
    mapToExternal(correlationId, collection, internalId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('map_to_external', correlationId, {
                collection: collection,
                internal_id: internalId
            });
        });
    }
    mapToInternal(correlationId, collection, externalId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('map_to_internal', correlationId, {
                collection: collection,
                external_id: externalId
            });
        });
    }
    deleteMapping(correlationId, collection, internalId, externalId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('map_to_internal', correlationId, {
                collection: collection,
                external_id: externalId
            });
        });
    }
}
exports.MappingsCommandableHttpClientV1 = MappingsCommandableHttpClientV1;
//# sourceMappingURL=MappingsCommandableHttpClientV1.js.map