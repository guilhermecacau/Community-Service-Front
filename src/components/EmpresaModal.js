import React, { useState, useEffect } from "react";
import { Modal, Box, Input, Label, Button } from "@mui/material";
import axios from "axios";

export default function EmpresaModal({open, setOpenModal, dados, setDados, concluirCadastro}) {

  const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, pt: 2, px: 4, pb: 3,};
  return (
    <Modal
      open={open}
      onClose={() => setOpenModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="parent-modal-title">Centro de cadastro de empresas</h2>
        <p id="parent-modal-description">
          Preencha os campos e você poderá cadastrar uma empresa ou um serviço!
        </p>
        <Input fullWidth={true} value={dados.nome} placeholder="Digite o nome do serviço, loja, ou do prestador" onChange={(e) => setDados({...dados, nome: e.target.value})}/> <br/><br/>
        <Input fullWidth={true} value={dados.descricao} placeholder="Dê uma descrição ao serviço..." onChange={(e) => setDados({...dados, descricao: e.target.value})}/> <br/><br/>
        <Input fullWidth={true} value={dados.telefone} placeholder="Telefone (modelo +xx xx xxxxx-xxxx)" onChange={(e) => setDados({...dados, telefone: e.target.value})}/> <br/><br/>

        <Button onClick={concluirCadastro}>Concluir cadastro</Button>
      </Box>
    </Modal>
  );
}
