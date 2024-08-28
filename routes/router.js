import express from 'express';
import appointmentController from './AppointmentController.js';
import doctorController from './DoctorController.js';
import pacientController from './PacientController.js';
import prescriptionController from './PrescriptionController.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Server is OK!');
    res.status(200).json({ message: "success" });
});

router.use('/', appointmentController);
router.use('/', doctorController);
router.use('/', pacientController);
router.use('/', prescriptionController);

export default router;