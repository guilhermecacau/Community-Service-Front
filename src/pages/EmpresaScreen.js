import React, { useState, useEffect } from "react";
import { Table, IconButton, Icon, Button } from "@mui/joy";
import { SpeedDial , SpeedDialIcon, SpeedDialAction, Box } from "@mui/material"
import { Snackbar } from "@mui/material";
import axios from "axios";
import EmpresaModal from "../components/EmpresaModal";
import { Delete, Edit} from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';

function EmpresaScreen() {
  const [empresas, setEmpresas] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openSnackBar, setOpenSnackbar] = useState(false);
  const [dados, setDados] = useState({});

  const actions = [
    { id: 1, icon: <AddCircleOutlineIcon />, name: "Criar",  },
    { id: 2, icon: <VisibilityIcon />, name: "Ver seus serviços" },
    { id: 3, icon: <SaveIcon />, name: "Ver as empresas em papel" },
  ];

  useEffect(() => {
    getEmpresas();
  }, []);

  useEffect(() => {
    if (!openModal) setDados({});
  }, [openModal]);

  async function getEmpresas() {
    var response = await axios.get("http://localhost:3000/empresas");
    setEmpresas(response.data);
  }

  function criarEmpresa() {
    setOpenModal(true);
  }

  async function concluirCadastro() {
    if (!dados?.nome || !dados?.descricao || !dados?.telefone) return;

    if (dados.id) {
      await axios.put("http://localhost:3000/empresas/" + dados.id, dados);
    } else {
      await axios.post("http://localhost:3000/empresas", dados);
    }

    await getEmpresas();
    setOpenSnackbar(true);
    setOpenModal(false);
  }

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  async function deletarEmpresa(id) {
    await axios.delete("http://localhost:3000/empresas/" + id);
    await getEmpresas();
  }

  function atualizarEmpresa(empresa) {
    setDados({
      id: empresa._id,
      nome: empresa.nome,
      descricao: empresa.descricao,
      telefone: empresa.telefone,
    });
    setOpenModal(true);
  }

  function speedDialFunctions(id){
   if(id == 1){
    criarEmpresa();
   }
  }
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Telefone p/ contato</th>
            <th>Funcionalidades</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((e) => (
            <tr>
              <td>{e.nome}</td>
              <td>{e.descricao}</td>
              <td>{e.telefone}</td>
              <td>
                <Button onClick={() => deletarEmpresa(e._id)} color="danger">
                  <Delete />
                </Button>{" "}
                &nbsp;
                <Button onClick={() => atualizarEmpresa(e)} color="warning">
                  <Edit />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <br />
      <br />
      <br />

      {openModal && (
        <EmpresaModal
          open={openModal}
          setOpenModal={setOpenModal}
          dados={dados}
          setDados={setDados}
          concluirCadastro={concluirCadastro}
        />
      )}
      {openSnackBar && (
        <Snackbar
          open={openSnackBar}
          autoHideDuration={1500}
          onClose={handleCloseSnackBar}
          message="Serviço Cadastrado"
        />
      )}

      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1, }}>
        <SpeedDial
          ariaLabel="Mais..."
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => speedDialFunctions(action.id)}
            />
          ))}
        </SpeedDial>
      </Box>
      
    </div>
  );
}

export default EmpresaScreen;
