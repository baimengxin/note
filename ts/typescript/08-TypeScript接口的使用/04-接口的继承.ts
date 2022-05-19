interface ISwim {
    swimming: () => void
}

interface IFly {
    flying: () => void
}

// 接口的继承，允许继承多个接口
interface IAction extends ISwim, IFly {

}

const action: IAction = {
    swimming() {},

    flying() {}
}