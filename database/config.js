const mongoose = require('mongoose');
// require('dotenv').config();

const dbConection = async() => {


    try {

        await mongoose.connect(process.env.DBCNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('BD Online', process.env.DBCNN);

    } catch (error) {

        console.log(error);

        throw new Error('Error a la Hora de Iniciar la BD ver', process.env.DBCNN);

    }




}
module.exports = {
    dbConection

}