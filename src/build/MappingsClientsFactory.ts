import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

import { MappingsDirectClientV1 } from '../version1/MappingsDirectClientV1';
import { MappingsMockClientV1 } from '../version1/MappingsMockClientV1';
import { MappingsCommandableHttpClientV1 } from '../version1/MappingsCommandableHttpClientV1';
import { MappingsNullClientV1 } from '../version1/MappingsNullClientV1';


export class MappingsClientsFactory extends Factory {
	public static Descriptor = new Descriptor("client-mappings", "factory", "default", "default", "1.0");
	public static DirectClientDescriptor = new Descriptor("client-mappings", "client", "direct", "*", "1.0");
	public static MockClientDescriptor = new Descriptor("client-mappings", "client", "mock", "*", "1.0");
	public static CmdHttpClientDescriptor = new Descriptor("client-mappings", "client", "commandable-http", "*", "1.0");
	public static NullClientDescriptor = new Descriptor("client-mappings", "client", "null", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(MappingsClientsFactory.DirectClientDescriptor, MappingsDirectClientV1);
		this.registerAsType(MappingsClientsFactory.MockClientDescriptor, MappingsMockClientV1);
		this.registerAsType(MappingsClientsFactory.CmdHttpClientDescriptor, MappingsCommandableHttpClientV1);
		this.registerAsType(MappingsClientsFactory.NullClientDescriptor, MappingsNullClientV1);
	}
	
}
