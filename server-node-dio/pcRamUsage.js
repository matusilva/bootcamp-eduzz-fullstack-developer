const os = require('os');
const { arch, platform, totalmem, freemem } = os;

const tRam = totalmem() / 1024 / 1024;
const fRam = freemem() / 1024 / 1024;

const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: parseInt(tRam),
    FreeRAM: parseInt(fRam),
}

console.log(stats);