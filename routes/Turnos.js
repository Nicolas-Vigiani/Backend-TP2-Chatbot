const express = require('express');
const router = express.Router();
const { Turnos } = require('../models');

const methods = require('../helpers/methods');

router.post('/horariosDisponibles', async (req, res) => {

    const tag = req.body.fulfillmentInfo.tag;
    const fechaDl = req.body.sessionInfo.parameters.dia_reserva;
    const especialidadDl = req.body.sessionInfo.parameters.especialidad;

    const fechaTransform = methods.getFechabyName(fechaDl);

    const turnos = await Turnos.findAll({
        where: {
            fecha: fechaTransform,
            especialidad: especialidadDl
        }
    });

    const turnosDisponibles = methods.getTurnosDisponibles(turnos);
    responseForDialog(tag, turnosDisponibles, res, fechaTransform);
});

router.post('/verificarHorarios', async (req, res) => {

    const tag = req.body.fulfillmentInfo.tag;
    const especialidadDl = req.body.sessionInfo.parameters.especialidad;
    const dateTransform = req.body.sessionInfo.parameters.date_transform;
    const horarioSelected = req.body.sessionInfo.parameters.horario_seleccionado;

    const turnos = await Turnos.findAll({
        where: {
            fecha: dateTransform,
            especialidad: especialidadDl
        }
    });

    const resultadoVerificacion = methods.getVerificarTurnosDisponibles(turnos, horarioSelected);
    responseForDialog(tag, '', res, resultadoVerificacion);
});

router.post('/reservarTurno', async (req, res) => {

    const tag = req.body.fulfillmentInfo.tag;

    const nombrePaciente = req.body.sessionInfo.parameters.nombre_paciente;
    const dniPaciente = req.body.sessionInfo.parameters.dni_paciente;
    const correoPaciente = req.body.sessionInfo.parameters.correo_paciente;
    const obraSocialPaciente = req.body.sessionInfo.parameters.obrasoc_paciente;
    const dateTransform = req.body.sessionInfo.parameters.date_transform;
    const horarioSelected = req.body.sessionInfo.parameters.horario_seleccionado;
    const especialidadDl = req.body.sessionInfo.parameters.especialidad;


    const fichaPaciente = {
        nombrePac: nombrePaciente.name,
        dniPac: dniPaciente,
        correoPac: correoPaciente,
        obraSocialPac: obraSocialPaciente,
        fecha: dateTransform,
        horario: horarioSelected,
        especialidad: especialidadDl
    }

    await Turnos.create(fichaPaciente);

    const objectResponse = {
        bandera: true,
        dateFinal: dateTransform
    }

    responseForDialog(tag, '', res, objectResponse);
});

const responseForDialog = (tag, texto, res, objetoResp) => {

    let jsonResponse = {};

    switch (tag) {
        case 'horariosDisponibles':
            jsonResponse = methods.getResponseHorariosDisponibles(texto, objetoResp);
            break;
        case 'verificarHorarios':
            jsonResponse = methods.getResponseVerificarHorarios(objetoResp);
            break;
        case 'reservaTurno':
            jsonResponse = methods.getResponseReservaTurno(objetoResp);
            break;

        default:
            break;
    }

    res.send(jsonResponse);
}

module.exports = router;