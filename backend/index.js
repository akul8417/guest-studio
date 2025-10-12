const express = require('express');
const UserRouter = require('./routers/userRouter');
const RoomRouter = require('./routers/roomRouter');
const bookingRouter = require('./routers/bookingRouter');
const hostRouter = require('./routers/hostRouter');


const cors = require('cors');

const app = express();

const port = 5000;

app.use(cors({ origin: ['http://localhost:3000'] }));

app.use(express.json());

app.use('/user', UserRouter);
app.use('/booking', bookingRouter);
app.use('/host', hostRouter);
app.use('/room', RoomRouter);


app.get('/', (req, res) => {
   res.send('response from express');
});
app.get('/add', (res,req)=>{
   res.send('response from add');
});
app.get('/update', (req,res)=>{
   res.send('response from update');
});

app.get('/delete',(res,req)=>{
   res.send('response from delete');
});


app.listen(port, () => {
   console.log('express server has started');

});