var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
    user: "",
    password: "",
    host: "",
    port: ,
    localRoot: __dirname + "/dist",
    remoteRoot: "/www/",
    include: ["*", ".htaccess"],
    // exclude: [""],
    deleteRemote: true,
    forcePasv: true,
    sftp: false
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));
