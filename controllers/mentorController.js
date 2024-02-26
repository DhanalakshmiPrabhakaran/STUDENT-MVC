const Mentor = require("../models/mentorModel"); 

//create a newmentor
exports.createMentor = async (req, res) => {
    try{
    console.log("$$$$$", req.body);    
    await Mentor.create(req.body);
    res.status(201).send("Mentor Created Successfully");
} catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
}

};

