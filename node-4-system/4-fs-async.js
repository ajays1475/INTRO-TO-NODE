var fs = require('fs');

if(fs.existsSync('temp')){
    console.log('Directory Exists removing....');
    if(fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdir('temp',function(err){
    fs.exists('temp',function(exists){
        if(exists){
            process.chdir('temp');
            fs.writeFile('test.txt','This is test text for the file',function(err){
                fs.rename('test.txt','new.txt',function(err){
                    fs.stat('new.txt',function(err,stats){
                        console.log('The File has Size: '+stats.size+' bytes');
                        fs.readFile('new.txt',function(err,data){
                            console.log('File Contents: '+data.toString());
                        })
                    })
                })
            })
        }
    })
})