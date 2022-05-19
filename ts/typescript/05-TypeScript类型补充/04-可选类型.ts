// 对象类型 -> point: x/y/z 
// point: {x: number, y: number, z?: number}
function pointCoordinate(point: {x: number, y: number, z?: number}){
    console.log('x坐标', point.x);
    console.log('y坐标', point.y);
    console.log('z坐标', point.z);  // 如果 z 没有传，则会返回 undefined
}

pointCoordinate({x: 110, y: 120})
pointCoordinate({x: 110, y: 120, z: 119})

export {}