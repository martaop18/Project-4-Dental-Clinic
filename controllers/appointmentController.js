const { Appointment } = require("../models");

const appointmentController = {};

//CREATE APPOINTMENT
appointmentController.createAppointment = async (req, res) => {
    try {
        const { date,  doctor_id, patient_id, service_id } = req.body;
       
        const { role_id, userId } = req;

        if (role_id === 1 && patient_id !== userId) {
                return res.json({
                success: false,
                message: "You can only create appointments for yourself",
            });
        }
        if (role_id === 3 && !patient_id) {
                return res.json({
                success: false,
                message: "Patient ID is required for doctors",
            });
        }
        const newAppointment = await Appointment.create(
            {
                date,//'2023-06-07T14:30:00'
                doctor_id,
                patient_id,
                service_id,
            }
        );

        return res.json({
            success: true,
            message: "Appointment created",
            data: newAppointment
        });
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Appointment cannot be created",
                error: error
            }
        )
    }
}
//DELETE APPOINTMENT

appointmentController.deleteAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;

        const deleteAppointment = await Appointment.destroy({
            where: {
                id: appointmentId
            }
        });

        return res.json(
            {
                success: true,
                message: "Appointment deleted",
                data: deleteAppointment
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Appointment cannot be deleted",
                error: error
            }
        )
    }
}
//UPDATE APPOINTMENT

appointmentController.updateAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;

        const appointment = await Appointment.findByPk(appointmentId);

        if (!appointment) {
            return res.json(
                {
                    success: true,
                    message: "AppointmentId doesnt exist"
                }
            );
        };

        const { date, service_id, doctor_id, } = req.body;
        // Verificar el rol del usuario que realiza la solicitud

        const appointmentUpdate = await Appointment.update(
            {
                date,//'2023-06-07T14:30:00'
                service_id,
                doctor_id
            },
            {
                where: {
                    id: appointmentId
                }
            }
        )

        return res.json(
            {
                success: true,
                message: "Appointment updated",
                data: appointmentUpdate
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Appointment cannot be updated",
                error: error
            }
        )
    }
}

module.exports = appointmentController;