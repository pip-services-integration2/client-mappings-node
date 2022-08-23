import { MappingsMemoryClientV1 } from '../../src/version1/MappingsMemoryClientV1';
import { MappingsClientV1Fixture } from './MappingsClientV1Fixture';


suite('MappingsMemoryClientV1', () => {
    let client: MappingsMemoryClientV1;
    let fixture: MappingsClientV1Fixture;

    setup(async () => {
        client = new MappingsMemoryClientV1();

        fixture = new MappingsClientV1Fixture(client);
    });

    test('Get Mapping Collections', async () => {
        fixture.testGetMappingCollections();
    });

    test('Get Mappings', async () => {
        await fixture.testGetMappings();
    });

    test('Mapping', async () => {
        await fixture.testMapping();
    });

});