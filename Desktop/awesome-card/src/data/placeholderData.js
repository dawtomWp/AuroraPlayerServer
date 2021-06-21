const hugeEngine = {
    name:"5.2L 532BHP",
    price: "5000",
    gearbox: ['automatic'],
}
const largeEngine = {
    name:"4.2L 443BHP",
    price: "4100",
    gearbox: ['automatic','manual']
}
const mediumEngine = {
    name:"3.6L 374BHP",
    price: "3350",
    gearbox: ['automatic',"manual"]
}
const smallEngine = {
    name:"2.0L 166BHP",
    price: "2300",
    gearbox: ['manual']
}



export const dataCars= {

    models: {

            pro: {
                name: "pro rs3",  
                engine: [hugeEngine,largeEngine,mediumEngine,smallEngine],
                color: ['red','blue','gold','black'],
                id:0
            },
            uber: {
                name: "uber rs2",
                engine: [largeEngine,mediumEngine,smallEngine],
                color: ['blue','gold','black'],
                id:1
             },
             standard: {
                name: "standard", 
                engine: [mediumEngine,smallEngine],
                color: ['red','blue','black'],
                id:2,
            },
            wk: {
                name: "wk", 
                engine: [smallEngine],
                color: ['red','blue'],
                id:3
            },
    }
}
