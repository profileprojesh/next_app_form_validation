import { Stream } from 'stream';

const fs = require('fs')
const csv = require('fast-csv');

// let users = []

// to create a csv file by validatiing the given condition
function createcsv(data) {
    return new Promise((resolve, reject) => {
        let filename = 'data.csv'
        let newline = '\r\n'
        let first = true
        let val = Object.values(data)
        let emailvalid = true
        let phonevalid = true
        let headers = Object.keys(data)

        if (fs.existsSync(filename)) {
            first = false
        }

        // function to create a csv file if with headers if file does not exist
        function createfirstentry() {
            let final = headers + newline + val + newline;
            fs.writeFile(filename, final, () => console.log("writen"))
            // users.push(data)

        }

        // function to append data to csv  without headers if file exist and 
        function createotherentry() {
            console.log("second resolve")
            let final = val + newline
            fs.appendFileSync(filename, final)
            // users.push(data)
        }

        if (first) {
            console.log("First entry")
            resolve(createfirstentry())
        }
        else {
            let stream = fs.createReadStream('data.csv');
            csv.parseStream(stream, { headers: true })
                .on("data", function (value) {
                    if (value.email === data.email) {
                        console.log("email already exist")
                        emailvalid = false
                    }
                    if (value.phone === data.phone) {
                        phonevalid = false
                    }
                }).on('end', () => {
                    if (emailvalid && phonevalid && !first) {
                        console.log('value of valid', emailvalid, phonevalid)
                        console.log("not first entry")
                        resolve(createotherentry())
                    }
                    else {
                        console.log("Inside rejected")
                        reject({ validemail: emailvalid, validphone: phonevalid })
                    }
                })


        }
    }

    )
}


// function for getting all data from csv file
function parseuserfromcsv(){
    return new Promise((resolve,reject)=>{
        let users = []
        let stream = fs.createReadStream('data.csv');
         csv.parseStream(stream, { headers: true })
            .on("data", function (value) {
                console.log("value is",value)
                users.push(value)
            }).on("end",()=>{
            resolve(users)
            })


    })

}


export default function (req, res) {
    if (req.method == 'POST') {
        console.log('Adding user:::', user);
        createcsv(user).then(() => {
            console.log("Pushing users to a array")
            res.json("New user has been added")
        })
            .catch(ret => res.json(ret))
    }

    else if (req.method == 'GET') {
        parseuserfromcsv().then(ret=>res.json(ret))
    }

}