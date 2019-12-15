import { Router } from 'express';
import * as PatientController from '../controllers/patient.controller';
const router = new Router();

router.route('/patient').post(PatientController.createPatient);

router.route('/').get(PatientController.getAllPatients);

router.route('/patient/:patientId').get(PatientController.getPatientById);

router.route('/patient/:patientId').patch(PatientController.updatePatient);

router.route('/patient/:patientId').delete(PatientController.deletePatient);

export default router;
