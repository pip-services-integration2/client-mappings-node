import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { MappingsMemoryPersistence } from 'service-mappings-node';
import { MappingsController } from 'service-mappings-node';
import { MappingsCommandableHttpServiceV1 } from 'service-mappings-node';

import { MappingsCommandableHttpClientV1 } from '../../src/version1/MappingsCommandableHttpClientV1';
import { MappingsClientV1Fixture } from './MappingsClientV1Fixture';

suite('MappingsCommandableHttpClientV1', () => {
    let persistence: MappingsMemoryPersistence;
    let controller: MappingsController;
    let service: MappingsCommandableHttpServiceV1;
    let client: MappingsCommandableHttpClientV1;
    let fixture: MappingsClientV1Fixture;

    setup(async () => {
        persistence = new MappingsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new MappingsController();
        controller.configure(new ConfigParams());

        let httpConfig = ConfigParams.fromTuples(
            'connection.protocol', 'http',
            'connection.port', 3000,
            'connection.host', 'localhost'
        );

        service = new MappingsCommandableHttpServiceV1();
        service.configure(httpConfig);

        client = new MappingsCommandableHttpClientV1();
        client.configure(httpConfig);

        let references = References.fromTuples(
            new Descriptor('service-mappings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-mappings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-mappings', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('service-mappings', 'client', 'http', 'default', '1.0'), client
        );
        controller.setReferences(references);
        service.setReferences(references);
        client.setReferences(references);

        fixture = new MappingsClientV1Fixture(client);

        await persistence.open(null);
        await service.open(null);
        await service.open(null);
        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
        await service.close(null);
        await persistence.close(null);;
    });

    test('Get Mapping Collections', async () => {
        await fixture.testGetMappingCollections();
    });

    test('Get Mappings', async () => {
        await fixture.testGetMappings();
    });

    test('Mapping', async () => {
        await fixture.testMapping();
    });

});