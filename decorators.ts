export function SimpleLogger(target: Function) {
    console.log("Class created:", target.name)
}

export function LogMethod(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
        console.log(`Method ${key} called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args)
    }
    return descriptor;
}

export function readonly(target: any, key: string, descriptor?: PropertyDescriptor): any {
    if (descriptor) {
        descriptor.writable = false;
        return descriptor;
    }

    let value: any;

    return {
        get: function (): any {
            return value;
        },
        set: function (newValue: any): void {
            if (value !== undefined) {
                console.error('Cannot set readonly property');
            } else {
                value = newValue;
            }
        }
    };
}