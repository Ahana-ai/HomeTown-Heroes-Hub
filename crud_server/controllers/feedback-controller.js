import Feedbacks from "../models/connect-model.js"

export const addFeedback = async (req, res, next) => {
    try {
        
        const newFeedback= new Feedbacks({
            ...req.body
        })
        await newFeedback.save()
        return res.status(200).send({data:newFeedback,mesage:'success'})
    }
    catch (e) {
        console.log(e)
        res.status(200).send({data:null,mesage:e.message})
    }
}