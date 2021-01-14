const GRID_SIZE = 21;


export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function outsideGrid(positiion) {
    return (
        positiion.x < 1 || positiion.x > GRID_SIZE || positiion.y < 1 || positiion.y > GRID_SIZE
    )
}