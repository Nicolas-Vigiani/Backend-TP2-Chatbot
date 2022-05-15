/* FECHAS */

const getFechabyName = (fechaDl) => {

    const tiempoTranscurrido = Date.now();
    const formISO = new Date(tiempoTranscurrido).toISOString(); // "2020-06-13T18:30:00.000Z"
    const formDate = new Date(tiempoTranscurrido).toDateString(); // "Sun Jun 14 2020"

    const todayDate = formDate[0] + formDate[1] + formDate[2];

    var returnDate = '';

    switch (todayDate) {

        case 'Mon':

            if (fechaDl === 'Lunes') {
                returnDate = formISO[0] + formISO[1] + formISO[2] + formISO[3] + '-' + formISO[5] + formISO[6] + '-' + formISO[8] + formISO[9];
            } else {

                switch (fechaDl) {
                    case 'Martes':
                        returnDate = calcularDiaAlternativo(1);
                        break;

                    case 'Miercoles':
                        returnDate = calcularDiaAlternativo(2);
                        break;

                    case 'Jueves':
                        returnDate = calcularDiaAlternativo(3);
                        break;

                    case 'Viernes':
                        returnDate = calcularDiaAlternativo(4);
                        break;

                    default:
                        break;
                }

            }

            break;

        case 'Tue':

            if (fechaDl === 'Martes') {
                returnDate = formISO[0] + formISO[1] + formISO[2] + formISO[3] + '-' + formISO[5] + formISO[6] + '-' + formISO[8] + formISO[9];
            } else {

                switch (fechaDl) {
                    case 'Lunes':
                        returnDate = calcularDiaAlternativo(6);
                        break;

                    case 'Miercoles':
                        returnDate = calcularDiaAlternativo(1);
                        break;

                    case 'Jueves':
                        returnDate = calcularDiaAlternativo(2);
                        break;

                    case 'Viernes':
                        returnDate = calcularDiaAlternativo(3);
                        break;

                    default:
                        break;
                }

            }

            break;

        case 'Wed':

            if (fechaDl === 'Miercoles') {
                returnDate = formISO[0] + formISO[1] + formISO[2] + formISO[3] + '-' + formISO[5] + formISO[6] + '-' + formISO[8] + formISO[9];
            } else {

                switch (fechaDl) {
                    case 'Lunes':
                        returnDate = calcularDiaAlternativo(5);
                        break;

                    case 'Martes':
                        returnDate = calcularDiaAlternativo(6);
                        break;

                    case 'Jueves':
                        returnDate = calcularDiaAlternativo(1);
                        break;

                    case 'Viernes':
                        returnDate = calcularDiaAlternativo(2);
                        break;

                    default:
                        break;
                }

            }

            break;

        case 'Thu':

            if (fechaDl === 'Jueves') {
                returnDate = formISO[0] + formISO[1] + formISO[2] + formISO[3] + '-' + formISO[5] + formISO[6] + '-' + formISO[8] + formISO[9];
            } else {

                switch (fechaDl) {

                    case 'Lunes':
                        returnDate = calcularDiaAlternativo(4);
                        break;

                    case 'Martes':
                        returnDate = calcularDiaAlternativo(5);
                        break;

                    case 'Miercoles':
                        returnDate = calcularDiaAlternativo(6);
                        break;

                    case 'Viernes':
                        returnDate = calcularDiaAlternativo(1);
                        break;

                    default:
                        break;
                }

            }

            break;

        case 'Fri':

            if (fechaDl === 'Viernes') {
                returnDate = formISO[0] + formISO[1] + formISO[2] + formISO[3] + '-' + formISO[5] + formISO[6] + '-' + formISO[8] + formISO[9];
            } else {

                switch (fechaDl) {
                    case 'Lunes':
                        returnDate = calcularDiaAlternativo(3);
                        break;

                    case 'Martes':
                        returnDate = calcularDiaAlternativo(4);
                        break;

                    case 'Miercoles':
                        returnDate = calcularDiaAlternativo(5);
                        break;

                    case 'Jueves':
                        returnDate = calcularDiaAlternativo(6);
                        break;

                    default:
                        break;
                }

            }

            break;

        case 'Sat':

            switch (fechaDl) {
                case 'Lunes':
                    returnDate = calcularDiaAlternativo(2);
                    break;

                case 'Martes':
                    returnDate = calcularDiaAlternativo(3);
                    break;

                case 'Miercoles':
                    returnDate = calcularDiaAlternativo(4);
                    break;

                case 'Jueves':
                    returnDate = calcularDiaAlternativo(5);
                    break;

                case 'Viernes':
                    returnDate = calcularDiaAlternativo(6);
                    break;

                default:
                    break;
            }

            break;

        case 'Sun':

            switch (fechaDl) {
                case 'Lunes':
                    returnDate = calcularDiaAlternativo(1);
                    break;

                case 'Martes':
                    returnDate = calcularDiaAlternativo(2);
                    break;

                case 'Miercoles':
                    returnDate = calcularDiaAlternativo(3);
                    break;

                case 'Jueves':
                    returnDate = calcularDiaAlternativo(4);
                    break;

                case 'Viernes':
                    returnDate = calcularDiaAlternativo(5);
                    break;

                default:
                    break;
            }

            break;

        default:
            break;
    }

    return returnDate
}

const calcularDiaAlternativo = (diasSum) => {

    var fechaActual = new Date();
    var fechaFin = new Date(fechaActual.getTime() + (diasSum * 24 * 60 * 60 * 1000));

    var day = fechaFin.getDate();
    var month = fechaFin.getMonth() + 1;

    (month < 10) && (month = '0' + month);
    (day < 10) && (day = '0' + day);

    var fechaReturn = fechaFin.getFullYear() + '-' + month + '-' + day

    return fechaReturn;
}

/* HORARIOS */

const getTurnosDisponibles = (turnosDB) => {

    let text = '';
    let content = '';

    let horario = '';
    var arrayHorarios = [];

    var horasDisponibles = '';

    if (turnosDB !== null) {
        turnosDB.forEach(turno => {
            horario = turno.horario;
            arrayHorarios.push(horario);
        });

        horasDisponibles = getHorasDisponibles(arrayHorarios);

    } else {
        text = 'Tenemos los siguientes Horarios Disponibles para este dia:'
        content = '- 14:00 hs. \n\n - 15:00 hs. \n\n - 16:00 hs. \n\n - 17:00 hs. \n\n - 18:00 hs. \n\n - 19:00 hs. \n\n - 20:00 hs. '
        horasDisponibles = text + content;
    }

    return horasDisponibles;
}

const getHorasDisponibles = (arrayHorarios) => {

    var b14 = true;
    var b15 = true;
    var b16 = true;
    var b17 = true;
    var b18 = true;
    var b19 = true;
    var b20 = true;

    arrayHorarios.forEach(horario => {
        switch (horario) {
            case '14':
                b14 = false;
                break;

            case '15':
                b15 = false;
                break;

            case '16':
                b16 = false;
                break;

            case '17':
                b17 = false;
                break;

            case '18':
                b18 = false;
                break;

            case '19':
                b19 = false;
                break;

            case '20':
                b20 = false;
                break;

            default:
                break;
        }
    });

    var horasDisponibles = [];

    if (b14) {
        horasDisponibles.push('14');
    }
    if (b15) {
        horasDisponibles.push('15');
    }
    if (b16) {
        horasDisponibles.push('16');
    }
    if (b17) {
        horasDisponibles.push('17');
    }
    if (b18) {
        horasDisponibles.push('18');
    }
    if (b19) {
        horasDisponibles.push('19');
    }
    if (b20) {
        horasDisponibles.push('20');
    }

    var text = '';

    if (horasDisponibles.length > 0) {
        text = 'Tenemos los siguientes Horarios Disponibles para este dia:'
        horasDisponibles.forEach(horario => {
            text += '\n - ' + horario + ':00 hs.'
        });
    } else {
        text = 'Perdon pero no hay horarios disponibles para este dia.'
    }

    return text;

}

const getVerificarTurnosDisponibles = (turnosDB, horarioSelected) => {

    var bandera = true;
    var arrayHorarios = [];

    if (turnosDB !== null) {

        turnosDB.forEach(turno => {
            horario = turno.horario;
            arrayHorarios.push(horario); // 16 - 19
        });

        arrayHorarios.forEach(horario => {
            if (horario == horarioSelected) {
                bandera = false;
            }
        });

    } else {
        bandera = true;
    }

    return bandera;
}

/* --------------------------------------------------------- RESPONSE --------------------------------------------------------- */

const getResponseHorariosDisponibles = (texto, dateT) => {

    const jsonResponse = {
        fulfillment_response: {
            messages: [
                {
                    text: {
                        text: [texto],
                    },
                },
            ],
        },
        sessionInfo: {
            parameters: {
                date_transform: dateT
            }
        }
    };

    return jsonResponse;
}

const getResponseVerificarHorarios = (bandera) => {

    const jsonResponse = {
        sessionInfo: {
            parameters: {
                bandera: bandera
            }
        }
    };

    return jsonResponse;
}

const getResponseReservaTurno = (objectResponse) => {

    const dateF = objectResponse.dateFinal;

    const jsonResponse = {
        sessionInfo: {
            parameters: {
                banderaReserva: objectResponse.bandera,
                date_final: dateF[8] + dateF[9] + '-' + dateF[5] + dateF[6] + '-' + dateF[0] + dateF[1] + dateF[2] + dateF[3]
            }
        }
    };

    return jsonResponse;
}

module.exports = {
    getFechabyName,
    getTurnosDisponibles,
    getVerificarTurnosDisponibles,
    getResponseHorariosDisponibles,
    getResponseVerificarHorarios,
    getResponseReservaTurno
}