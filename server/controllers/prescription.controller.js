import Prescription from "../models/prescription.model";

/**
 * Create Prescription
 * @param req
 * @param res
 * @returns record
 */
export function createPrescription(req, res) {
    const { weight, doctor_id, patient_id, prescription, heartRate, bp } = req.body;
    const presc = new Prescription({
        weight: weight,
        doctor_id: doctor_id,
        patient_id: patient_id,
        prescription: prescription,
        heartRate: heartRate,
        bp: bp,
    });
    presc.save((error, savedPrescription) => {
        if (error){
            console.log('Error creating patient',error);
            return res.status(400).json(error);
        }
        return res.json(savedPrescription);
    });
}

/**
 * Get Prescription Record By Id
 * @param req
 * @param res
 * @returns record
 */
export function getPrescriptionById(req, res) {
    const id = req.params.id;
    Prescription.findById(id)
        .then((prescription) => {
            res.status(200).json({
                success: true,
                Prescription: prescription,
            });
        })
        .catch((err) => {
            res.status(404).json({
                success: false,
                message: 'This Prescription does not exist',
                error: err.message,
            });
        });
}

/**
 * Update Patient Record By Id
 * @param req
 * @param res
 * @returns updated record
 */
export function updatePrescription(req, res) {
    const id = req.params.id;
    const updateObject = req.body;
    Prescription.update({ _id:id }, { $set:updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Prescription is updated',
                Prescription: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.'
            });
        });
}

/**
 * Delete Prescription By ID
 * @param req
 * @param res
 * @returns void
 */
export function deletePrescription(req, res) {
    const id = req.params.id;
    Prescription.findByIdAndRemove(id)
        .exec()
        .then(()=> res.status(204).json({
            success: true,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: 'Unable to delete try again',
            error: err.message,
        }));
}

/**
 * find all records
 * @param req
 * @param res
 * @returns void
 */
export function getAllPrescriptions(req, res) {
    Prescription.find({}, function (err, prescriptions) {
        if (err) return res.status(500).json({
            success: false,
            message: 'Server error try again',
            error: err.message,
        });
        res.status(200).json({
            success: true,
            prescriptions: prescriptions,
        });
    });
}

/**
 * find all records for a particular patient
 * @param req
 * @param res
 * @returns void
 */
export function getAllPrescriptionsById(req, res) {
    const doctor_id = req.params.did;
    const patient_id = req.params.pid;
    Prescription.find({doctor_id: doctor_id, patient_id: patient_id}, function (err, prescriptions) {
        if (err) return res.status(500).json({
            success: false,
            message: 'Server error try again',
            error: err.message,
        });
        res.status(200).json({
            success: true,
            prescriptions: prescriptions,
        });
    });
}

