
import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { MappingsMemoryPersistence } from 'service-mappings-node';
import { MappingsController } from 'service-mappings-node';

import { MappingsDirectClientV1 } from '../../src/version1/MappingsDirectClientV1';
import { MappingsClientV1Fixture } from './MappingsClientV1Fixture';


suite('MappingsDirectClientV1', () => {
    let persistence: MappingsMemoryPersistence;
    let controller: MappingsController;
    let client: MappingsDirectClientV1;
    let fixture: MappingsClientV1Fixture;

    setup(async () => {
        persistence = new MappingsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new MappingsController();
        controller.configure(new ConfigParams());

        client = new MappingsDirectClientV1();

        let references = References.fromTuples(
            new Descriptor('service-mappings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-mappings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-mappings', 'client', 'direct', 'default', '1.0'), client
        );

        controller.setReferences(references);
        client.setReferences(references);

        fixture = new MappingsClientV1Fixture(client);

        await persistence.open(null);
    });

    teardown(async () => {
        await persistence.close(null);
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