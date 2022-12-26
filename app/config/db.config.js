module.exports = {
    HOST: "localhost",
    USER: "almyra",
    PASSWORD: "mysecretpassword",
    DB: "exbaseProject",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}