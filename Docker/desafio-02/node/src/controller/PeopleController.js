const db = require('../database');
const table_name = 'people';

module.exports = {
    async getAll(req, res) {
        try {
            const peopleList = await db(table_name).select('*');
            const mappedList = peopleList.map(person => {
                return `<h2>${person.name}</h2>`
            })
            const replacedList = mappedList.join("");
            return res.send(
                "<h1>Full cycle Rocks!!</h1> <br> " + replacedList
                );
        } catch (error) {
            res.status(400).json({
                message: 'Error getting people'
            });
        }
    },

    async create(req, res) {
        const { name } = req.body;
        const transaction = await db.transaction();
        try {
            await transaction(table_name).insert({name});
            await transaction.commit();
            return res.status(200).send()
        } catch (error) {
            await transaction.rollback();
            res.status(400).json({
                message: 'Error creating person',
            })
        }
    }
}