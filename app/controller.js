const { saveCallId, getCallId } = require("./model");

exports.saveCallId = async (req, res) => {
    try {
        const { id, signalData } = req.body;            // Inside try we are assuming from request body we will get some signal data
        await saveCallId(id, signalData);
        res.status(200).send(true);

    }
    catch (ex) {
        res.status(400).send(ex.message); // Here we will send exception(ex) message
    }
};

exports.getCallId = async (req, res) => {
    try {
        const { id } = req.params;
        const code = await getCallId(id);
        res.status(200).send({ code });
    }
    catch (ex) {
        res.status(400).send(ex.message);
    }
}