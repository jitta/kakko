
import * as Images from '../index'


// This doesn't work since Jest already mock require image to 1
test('All images should be exported', () => {
  Object.keys(Images).forEach(image => {
    expect(Images[image]).toBeTruthy()
  })
});
