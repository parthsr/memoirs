const ping = require("./ping")
// @ponicode
describe("ping.handler", () => {
    test("0", () => {
        let callFunction = () => {
            ping.handler("POST", 200)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ping.handler("PUT", 429)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ping.handler("GET", 200)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ping.handler("PUT", 200)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ping.handler("DELETE", 404)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ping.handler("", Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
