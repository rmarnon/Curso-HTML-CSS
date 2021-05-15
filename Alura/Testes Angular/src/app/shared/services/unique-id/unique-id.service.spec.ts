import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  let service: UniqueIdService;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUnitIdWithPrefix.name}
    Should generate id when called with prefix`, () => {
    const id = service.generateUnitIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();

    expect(true).toBeTrue();
    expect(true).toBe(true);
    expect(true).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generateUnitIdWithPrefix.name}
    should not generate duplicated id when called multiple times`, () => {
   const ids = new Set();
   for (let i = 0; i < 50; i++) {
    ids.add(service.generateUnitIdWithPrefix('app'));
   }
   expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of ids`, () => {
    service.generateUnitIdWithPrefix('app');
    service.generateUnitIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUnitIdWithPrefix.name}
    should throw when called with empty`, () => {
      const invalidValues = [null, undefined, '', '1'];
      invalidValues.forEach(value => {
        expect(() => service.generateUnitIdWithPrefix(value))
        .withContext(`Invalid value: ${value}`)
        .toThrow();
      });
    });

});
