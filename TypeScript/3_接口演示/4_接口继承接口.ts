// 一个接口可以继承多个接口
interface PhoneScreen {
    widthPX: number;
    heightPX: number;
    light(): any;
}
interface Battery {
    capacity: number;
    charge(): any;
}

interface Phone extends PhoneScreen, Battery {
    
}