import helloWorld from '../src'

describe('Hello World', () => {
    it('calls console.log', () => {
        console.log = jest.fn()
        helloWorld()
        expect(console.log).toHaveBeenCalled()
    })
})
