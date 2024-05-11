import {LogMethod, readonly, SimpleLogger} from "./decorators";
@SimpleLogger
class Test {
    @readonly
    public prop1: string = 'prop1'
    private _prop2: string = 'prop2'

    @LogMethod
    method1() {
        console.log(this.prop1)
    }

    @LogMethod
    method2() {
        console.log(this._prop2)
    }
}

const test = new Test()
test.method1()
test.method2()
test.prop1 = "jahdkjah"
console.log(test.prop1)