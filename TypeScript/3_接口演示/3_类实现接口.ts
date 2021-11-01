// 一个类可以实现多个接口
interface PhoneScreen {
    widthPX: number;
    heightPX: number;
    light(): any;
}
interface Battery {
    capacity: number;
    charge(): any;
}

class Phone implements PhoneScreen, Battery {
    widthPX: number;
    heightPX: number;
    light() {
        throw new Error("Method not implemented.");
    }
    capacity: number;
    charge() {
        throw new Error("Method not implemented.");
    }
    
}