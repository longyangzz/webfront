module.exports = {
    name: 'xxx',
    firstLevelDomain: 'site.com',
    port: 5300,
    defaultLang: 'zh-cn',
    sessionMaxAge: 30,
    externalUrlBase: '',
    formPayloadLimit: '2mb',
    userFileSizeLimit: '20mb',
    faviconUrl: '/public/img/favicon.ico',
    themeName: 'base',
    database: {
        databaseType: 'mssql',
        host: 'hsfx.bjdclw.com',
        port: '3348',
        database: 'user_center',
        user: 'sa',
        password: 'dclw@2019',
        acquireTimeout: 1000,
        connectionLimit: 100,
        queueLimit: 20
    },
    logger: {
        user: {
            level: 'INFO',
            backups: 7
        },
        app: {
            level: 'ERROR',
            backups: 7
        }
    },
    redis: {
        host: '127.0.0.1',
        port: 57192,
        pass: '',
        db: 1
    },
    login: {
        enableVeriCode: true,
        veriCodeLenth: 3,
        veriCodeComp: 'num',
        colorfulCaptcha: false,
        veriCodeLevel: 1,
        validationMode: 'userTable',
        hashType: '',
        userTable: {
            tableName: 'userinfo',
            idFieldName: 'id',
            nameFieldName: 'nickname',
            passwordFieldName: 'password',
            // roleFieldName: 'roles',
            // statusFieldName: 'status'
        }
    }
};
