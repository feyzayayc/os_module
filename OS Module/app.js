const os = require('node:os');
const fs = require('fs');


function pcInfo() {

    fs.mkdir('./Info', function () {
        fs.writeFile("./Info/PC Info.txt", pcInfoGoster(), function (err) {
            if (err) throw err;
        });
    });

    function byteToGB(byte) {
        const result = (byte / 1024 / 1024 / 1024).toFixed(2);
        return result;

    }

    function pcInfoGoster() {
        const cpus = os.cpus();
        const countCpus = cpus.length;
        const totalmem = byteToGB(os.totalmem());
        const freemem = byteToGB(os.freemem());
        const usedmem = (totalmem - freemem).toFixed(2);
        return `CPU : ${cpus[0].model}\nİşlemci Sayısı : ${countCpus}\nTotal Memory : ${totalmem} GB\nFree Memory : ${freemem} GB\nUsed Memory : ${usedmem} GB`;
    }
}

pcInfo();
exports.pcInfo = pcInfo; // dahil edilen dosyadan çağırılmasını sağlar