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
exports.MappingsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class MappingsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor('service-mappings', 'controller', '*', '*', '1.0'));
    }
    getCollectionNames(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'mappings.get_collections_names');
            try {
                return yield this._controller.getCollectionNames(correlationId);
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
                return yield this._controller.getMappings(correlationId, filter, paging);
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
                return yield this._controller.addMapping(correlationId, collection, internalId, externalId, timeToLive);
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
                return yield this._controller.mapToExternal(correlationId, collection, internalId);
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
                return yield this._controller.mapToInternal(correlationId, collection, externalId);
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
            let timing = this.instrument(correlationId, 'mappings.delete_mapping');
            try {
                return yield this._controller.deleteMapping(correlationId, collection, internalId, externalId);
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
exports.MappingsDirectClientV1 = MappingsDirectClientV1;
//# sourceMappingURL=MappingsDirectClientV1.js.map