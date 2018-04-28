var fs = require('fs');

if(fs.existsSync('temp')){
    console.log('Directory Exists removing....');
    if(fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp')
{
    if(fs.existsSync('temp')){
        process.chdir('temp');
        fs.writeFileSync('test.txt','This is some test text for the file');
        fs.renameSync('test.txt','new.txt');
        console.log('The file has size '+fs.statSync('new.txt').size+' bytes');
        console.log('File Content: '+fs.readFileSync('new.txt').toString());
    }
}