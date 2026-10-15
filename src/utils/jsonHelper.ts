import  fs  from "fs";



export class jsonHelper{

static jsonreader(filepath:string):Record<string,string>[]{

return JSON.parse(fs.readFileSync(filepath,"utf-8"));

}

}