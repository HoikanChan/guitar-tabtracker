module.exports ={
    port:process.env.PORT ||8081,
    db:{
        database:process.env.DB_NAME || 'tabtracker',
        user:process.env.DB_USER || 'admin',
        password:process.env.DB_PASSWORD||'123',
        options:{
            dialect:process.env.DIALECT||'sqlite',
            host:process.env.HOST||'localhost',
            storage:'./tabtracker.sqite'
        }
    }
} 