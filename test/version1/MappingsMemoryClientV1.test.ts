import { MappingsMockClientV1 } from '../../src/version1/MappingsMockClientV1';
import { MappingsClientV1Fixture } from './MappingsClientV1Fixture';


suite('MappingsMockClientV1', () => {
    let client: MappingsMockClientV1;
    let fixture: MappingsClientV1Fixture;

    setup(async () => {
        client = new MappingsMockClientV1();

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