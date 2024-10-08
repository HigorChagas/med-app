import mongoose from "mongoose";

const Schema = mongoose.Schema

const pacientSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required.']
        },
        birthDate: {
            type: Date,
            required: [true, 'Birth Date is required.']
        },
        email: {
            type: String,
            required: [true, 'E-mail is required.']
        },
        phone: {
            type: String,
            required: [true, 'Phone is required.'],
            validate: {
                validator: v => {
                    return /\d{2} 9\d{4}-\d{4}/.test(v);
                },
                message: props => 
                    `${props.value} this is not a valid phone value. Please use the following format 99 91234-5678`
            }
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

const pacient = mongoose.model('Pacient', pacientSchema);

export default pacient