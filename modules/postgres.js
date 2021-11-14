const {Sequelize} = require(`sequelize`);

const sequelize = new Sequelize(process.env.DATABASE_URL, 
    {logging: false}
);

module.exports = async function postgres() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
    } catch (error) {
        console.log("Unable to connect to the database:". error);
    }
};