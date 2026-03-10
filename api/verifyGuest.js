import fs from "fs"
import path from "path"

export default function handler(req, res) {

const filePath = path.join(process.cwd(), "guests.json")

const guests = JSON.parse(fs.readFileSync(filePath))

const { phone } = req.query

if(!phone){
return res.status(400).json({ access:false })
}

const guest = guests[phone]

if(guest){

return res.status(200).json({
access:true,
name:guest.name
})

}

return res.status(403).json({ access:false })

}
