const assert = require('assert');
const expect = require('chai').expect;
import { all, any, isLowerCase} from './../source/index';

describe('Elements of the array correspond to the condition', function() {
    it('passes if elements of the array correspond to the condition', function() {
        const testAll = all([4, 2, 3], x => x > 1);
        expect(testAll).equal(true);
    });
});

describe('String lowercase', function() {
    it('passes if string lowercase', function() {
        assert(
            isLowerCase('lowercase') === true,
            'should lowercase string and compare'
        );
    });
});


