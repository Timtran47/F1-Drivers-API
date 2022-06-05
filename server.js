const express = require('express')
const app = express()
// const cors = require('cors')
const PORT = 8000

// app.use(cors())

const drivers = {
    'max verstappen': {
        'nationality': 'Netherlands',
        'age': 24,
        'team': "Redbull"
    },
    'sergio perez':{
        'nationality': 'Mexico',
        'age': 32,
        'team': "Redbull" 
    },

    'charles leclerc':{
        'nationality': 'Monaco',
        'age': 24,
        'team': "Ferrari" 
    },

    'carlos sainz':{
        'nationality': 'Spain',
        'age': 27,
        'team': "Ferrari" 
    },
    
    'unknown':{
        'nationality': 'unknown',
        'age': 0,
        'team': "unknown"
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const driverName = request.params.name.toLowerCase()

    if( drivers[driverName] ){
        response.json(drivers[driverName])
    }else{
        response.json(drivers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})