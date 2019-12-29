import { Router } from 'express';
import * as PrescriptionController from '../controllers/prescription.controller';
const router = new Router();

router.route('/prescription').post(PrescriptionController.createPrescription);

router.route('/').get(PrescriptionController.getAllPrescriptions);

router.route('/:did/:pid').get(PrescriptionController.getAllPrescriptionsById);

router.route('/prescription/:id').get(PrescriptionController.getPrescriptionById);

router.route('/prescription/:id').patch(PrescriptionController.updatePrescription);

router.route('/prescription/:id').delete(PrescriptionController.deletePrescription);

export default router;