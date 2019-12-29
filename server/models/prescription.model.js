const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const prescriptionSchema = new Schema({
    weight: { type: mongoose.Schema.Types.Decimal, unique: false, required: true },
    doctor_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    patient_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    prescription: { type: String, unique: false, required: true },
    heartRate: { type: Number },
    bp: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\d{1,3}\/\d{1,3}$/.test(v);
            },
            message: props => `${props.value} is not a valid format!`
        },
    },
});
prescriptionSchema.set('timestamps', true);

// Define schema methods

// Define hooks for pre-saving


// Create reference to User & export
const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;