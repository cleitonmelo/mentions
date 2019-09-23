const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

const repository = require('../repositories/mentions-repository');

// Lista total
exports.listMentions = async (req, res) => {
    try {
      const data = await repository.listMentions();
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar as menções.'});
    };
};

// Criação
exports.createMention = async (req, res) => {
    try {
        await repository.createMention({
            friend: req.body.friend,
            mention: req.body.mention
        });
        res.status(201).send({message: 'Menção cadastrada com sucesso!'});
    } catch (e) {
        res.status(500).send({message: 'Falha ao cadastrar a menção.'});  
  };
};