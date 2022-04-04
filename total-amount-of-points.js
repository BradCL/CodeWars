//Total amount of points
const points = scores => scores.map(xVsY => xVsY[0] === xVsY[2] ? 1 : xVsY[0] > xVsY[2] ? 3 : 0).reduce((acc, c) => acc + c, 0)
