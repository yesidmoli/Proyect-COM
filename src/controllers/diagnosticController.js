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
            where: { EntrepreneurId: entrepreneurId }
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
