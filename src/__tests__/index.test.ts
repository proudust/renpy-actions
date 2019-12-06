import { setupRenPy } from '../setup-renpy';

describe("Setup Ren'Py", () => {
  const versions = ['7.3.5', '6.99.12.4'];
  versions.forEach(ver => test(`Setup Ren'Py version ${ver}`, () => setupRenPy(ver)));
});
