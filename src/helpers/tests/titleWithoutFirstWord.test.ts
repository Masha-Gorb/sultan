import {titleWithoutFirstWord} from '../titleWithoutFirsWord.js'

describe('titleWithoutFirstWord', function () {

  it('should return string without first word', () => {

    const titleToCrop = "Besides testing functions is really cool";
    const result = titleWithoutFirstWord(titleToCrop);

    expect(result).toBe("testing functions is really cool")
  });

});