
const Activities = require("../models/Activities");
const AssignedActivities = require("../models/AssignedActivities");
const DiagnosisResponses = require("../models/DiagnosisResponses");

exports.handleDiagnosticAnswers = async (req, res) => {
    try {
        const { entrepreneurId, answers } = req.body;

        //  Record the responses in the DiagnosisResponses table
        for (const answer of answers) {
            await DiagnosisResponses.create({
                entrepreneurId: entrepreneurId,
                questionId: answer.questionId,
                response: answer.response,
                
            });
        }

        // Get activities related to 'NO' answers
        const noResponses = answers.filter(answer => answer.response === 'NO');
        const questionIdsWithNoResponse = noResponses.map(answer => answer.questionId);
        const activitiesToAssign = await Activities.findAll({
            where: { DiagnosticQuestionId: questionIdsWithNoResponse }
        });

        // Obtains the activities assigned to the entrepreneur
        const assignedActivities = await AssignedActivities.findAll({
            where: { EntrepreneurId: entrepreneurId }
        });

        //  Filter the activities that are already assigned and those that are not
        const alreadyAssignedActivityIds = assignedActivities.map(assignedActivity => assignedActivity.activitiesId);
        const newActivitiesToAssign = activitiesToAssign.filter(activity => !alreadyAssignedActivityIds.includes(activity.id));

        //Assign activities not previously assigned
        for (const activity of newActivitiesToAssign) {
            await AssignedActivities.create({
                activitiesId: activity.id,
                EntrepreneurId: entrepreneurId,
                Status: 'PENDIENTE',
                
            });
        }

        // Get assigned activities after assignment
        const updatedAssignedActivities = await AssignedActivities.findAll({
            where: { EntrepreneurId: entrepreneurId },
            include: [Activities] // Incluir los datos de la actividad relacionada
        });

        //Send the JSON response with the assigned activities
        res.status(200).json({
            message: 'Answers recorded and activities assigned correctly.',
            assignedActivities: updatedAssignedActivities
        });

    } catch (error) {
        console.error('Driver error handleDiagnosticAnswers:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};

//Consultamos todas la actividades asignadas, para un empresario en especifico
exports.AssignedActivities = async (req, res, next) => {
    try {
        const id = req.params.empresario_id;

        const activities = await AssignedActivities.findAll({
            where: { EntrepreneurId: id
            },
            include: [Activities]
        });

        if (activities.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron actividades para el empresario con el ID proporcionado.' });
        }

        res.json(activities);
    } catch (error) {
        console.error('Error al buscar actividades asignadas:', error);
        res.status(500).json({ error: 'Ocurrió un error al buscar actividades asignadas.' });
    }
};

// función para actualizar los datos de un empresario registrado en la base de datos.
exports.updateAssignedActivitie = async (req, res, next) => {
    try {
      const id = req.params.activitie_id;
      // Obtener la actividad por su id
      const assignedActivity = await AssignedActivities.findOne({
        where: {
          id: id,
        },
      });
  
      // Verificar si la actividad existe
      if (!assignedActivity) {
        return res.status(404).json({ mensaje: 'No se ha encontrado esta actividad' });
      }
  

      //De lo contrario Actualizar los datos de la actividad
      const UpdateActivity = await assignedActivity.update(req.body);
  
      // Responder con la actividad actualizada
      res.json({
        mensaje: 'La actividad se ha actualizado exitosamente',
        actividad: UpdateActivity,
      });
    } catch (error) {
      res.status(500).json(error);
    }
};
