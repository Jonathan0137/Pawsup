const { db } = require("../db/db");
const { DBModel } = require("./model");

class UserModel extends DBModel {
    uid;
    username;
    password;
    email;
    location;

    constructor(data) {
        super({
            table: "users",
            primaryKey: "uid",
        })
        Object.assign(this, data);
    }

    static async getUsers() {
        const data = await db.query("SELECT * FROM users");
        return data.map((row) => new UserModel(row));
    }
    
    static async getUserByID(uid) {
        const data = await db.query("SELECT * FROM users WHERE uid = $1", [uid]);
        return data.length > 0 ? new UserModel(data[0]) : null;
    }

    static async loginUser(username, password) {
        const data = await db.query("SELECT * FROM users WHERE username=$1 AND password=$2", [username, password]);
        return data.length > 0 ? new UserModel(data[0]) : null;
    }
}

exports.UserModel = UserModel;