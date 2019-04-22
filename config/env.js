var secret = ('yoursecret');

var env = {
    webPort: process.env.PORT || 3000,
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || '',
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbDatabase: process.env.DB_DATABASE || 'Cities'
}

// var dburl = process.env.NODE_ENV === 'production' ?
//     'mongodb://' + env.dbUser + ':' + env.dbPassword + '@' + env.dbHost + ':' + env.dbPort + '/' + env.dbDatabase :
//     'mongodb://localhost/' + env.dbDatabase

var dburl = 'mongodb://mongo:27017/travel-point'

module.exports = {
    env: env,
    dburl: dburl,
    secret: secret
};

// var env = {
//   webPort: process.env.PORT || 3000,
//   dbHost: process.env.DB_HOST || 'ds115546.mlab.com',
//   dbPort: process.env.DB_PORT || '15546',
//   dbUser: process.env.DB_USER || 'ruben93',
//   dbPassword: process.env.DB_PASSWORD || '123456abc',
//   dbDatabase: process.env.DB_DATABASE || 'usersruben'
// }