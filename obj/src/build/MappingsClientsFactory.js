"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingsClientsFactory = void 0;
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const MappingsDirectClientV1_1 = require("../version1/MappingsDirectClientV1");
const MappingsMockClientV1_1 = require("../version1/MappingsMockClientV1");
const MappingsCommandableHttpClientV1_1 = require("../version1/MappingsCommandableHttpClientV1");
const MappingsNullClientV1_1 = require("../version1/MappingsNullClientV1");
class MappingsClientsFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(MappingsClientsFactory.DirectClientDescriptor, MappingsDirectClientV1_1.MappingsDirectClientV1);
        this.registerAsType(MappingsClientsFactory.MockClientDescriptor, MappingsMockClientV1_1.MappingsMockClientV1);
        this.registerAsType(MappingsClientsFactory.CmdHttpClientDescriptor, MappingsCommandableHttpClientV1_1.MappingsCommandableHttpClientV1);
        this.registerAsType(MappingsClientsFactory.NullClientDescriptor, MappingsNullClientV1_1.MappingsNullClientV1);
    }
}
exports.MappingsClientsFactory = MappingsClientsFactory;
MappingsClientsFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor("client-mappings", "factory", "default", "default", "1.0");
MappingsClientsFactory.DirectClientDescriptor = new pip_services3_commons_nodex_1.Descriptor("client-mappings", "client", "direct", "*", "1.0");
MappingsClientsFactory.MockClientDescriptor = new pip_services3_commons_nodex_1.Descriptor("client-mappings", "client", "mock", "*", "1.0");
MappingsClientsFactory.CmdHttpClientDescriptor = new pip_services3_commons_nodex_1.Descriptor("client-mappings", "client", "commandable-http", "*", "1.0");
MappingsClientsFactory.NullClientDescriptor = new pip_services3_commons_nodex_1.Descriptor("client-mappings", "client", "null", "*", "1.0");
//# sourceMappingURL=MappingsClientsFactory.js.map