import { sum } from './sum';

describe('utils/sum', () => {
    it('should return 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
