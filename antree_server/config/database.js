import { Sequelize } from "sequelize";


const db = new Sequelize('astama_antrian', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;