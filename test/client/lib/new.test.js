import _new from '../../../client/lib/new'

describe('test/client/lib/new.test.js', function () {
  test('new should be ok', function () {
    function Person () {
      this.age = 10
    }

    Person.prototype.getAge = function () {
      return this.age
    }

    const person = _new(Person)

    expect(person.age).toBe(10)
    expect(person.getAge()).toBe(10)
  })
})
