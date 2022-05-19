// 对象类型 -> point: x/y 
// point: {x: number, y: number}
function pointCoordinate(point: {x: number, y: number}){
    console.log('x坐标', point.x);
    console.log('y坐标', point.y);
}

pointCoordinate({x: 110, y: 120})
// x坐标 110
// y坐标 120

export {}