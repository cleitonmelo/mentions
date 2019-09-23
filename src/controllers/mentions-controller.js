const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

// Lista total
exports.listMentions = async (req, res) => {
    try {
      const data = await Mentions.find({},'friend mention -id');
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar as menções.'});
    };
};

// Criação
exports.createMention = async (req, res) => {
    try {
        const mention = new Mentions({
            friend: req.body.friend,
            mention: req.body.mention
        });
        await mention.save();
        res.status(201).send({message: 'Menção cadastrada com sucesso!'});
    } catch (e) {
        res.status(500).send({message: 'Falha ao cadastrar a menção.'});  
  };
};