const connection = require('../database/conection');
module.exports = {

    async index (request, response){
        const ongs_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id',ongs_id)
        .select('*');
        return response.json(incidents);
    },
    
};