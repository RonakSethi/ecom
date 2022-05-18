import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    id: String,
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true  
    },
    phone:{
        type:String,
    },
    cartItem:{

    }

})


const Orders = mongoose.model('orders', orderSchema)
export default Orders 