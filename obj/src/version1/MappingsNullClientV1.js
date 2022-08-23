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
exports.MappingsNullClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
class MappingsNullClientV1 {
    getCollectionNames(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Array();
        });
    }
    getMappings(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return new pip_services3_commons_nodex_1.DataPage();
        });
    }
    addMapping(correlationId, collection, internalId, externalId, timeToLive) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    mapToExternal(correlationId, collection, internalId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    mapToInternal(correlationId, collection, externalId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deleteMapping(correlationId, collection, internalId, externalId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
exports.MappingsNullClientV1 = MappingsNullClientV1;
//# sourceMappingURL=MappingsNullClientV1.js.map