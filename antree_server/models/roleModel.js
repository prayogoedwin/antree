import { Sequelize } from "sequelize";
import db from "../config/database.js";

//panggil fungsi tipe data di sequelize
const { DataTypes } = Sequelize;


//define schema
//db.define('antrian_role',{fields}, {opsi => lihat di dokumentasi sqequelize})
const Role = db.define('antrian_role',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    nama:{
        type: DataTypes.STRING
    },
    created_by:{
        type: DataTypes.UUID
    },
    updated_by:{
        type: DataTypes.UUID
    },
    deleted_by:{
        type: DataTypes.UUID
    },
    deleted_at:{
        type: DataTypes.DATE
    },


}, {
    freezeTableName: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
});

export default Role;