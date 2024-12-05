import React, { useState } from 'react';

const RegistroCertificados = () => {
  const [aba, setAba] = useState('registrar');
  const [dadosFormulario, setDadosFormulario] = useState({
    id: '',
    nomeAluno: '',
    nomeCurso: ''
  });
  const [idBusca, setIdBusca] = useState('');
  const [idRevogacao, setIdRevogacao] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const handleMudancaInput = (e) => {
    setDadosFormulario({
      ...dadosFormulario,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistrar = async (e) => {
    e.preventDefault();
    setErro('');
    try {
      // Código de integração com Web3 será implementado aqui
      setResultado('Certificado registrado com sucesso!');
    } catch (err) {
      setErro(err.message);
    }
  };

  const handleBuscar = async (e) => {
    e.preventDefault();
    setErro('');
    try {
      // Código de integração com Web3 será implementado aqui
      setResultado({
        id: idBusca,
        nomeAluno: 'João Silva',
        nomeCurso: 'Desenvolvimento Blockchain',
        dataEmissao: new Date().toLocaleDateString(),
        ehValido: true
      });
    } catch (err) {
      setErro(err.message);
    }
  };

  const handleRevogar = async (e) => {
    e.preventDefault();
    setErro('');
    try {
      // Código de integração com Web3 será implementado aqui
      setResultado('Certificado revogado com sucesso!');
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setAba('registrar')}
          style={{ marginRight: '10px' }}
        >
          Registrar Certificado
        </button>
        <button 
          onClick={() => setAba('buscar')}
          style={{ marginRight: '10px' }}
        >
          Buscar Certificado
        </button>
        <button 
          onClick={() => setAba('revogar')}
        >
          Revogar Certificado
        </button>
      </div>

      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <h2>
          {aba === 'registrar' && 'Registrar Novo Certificado'}
          {aba === 'buscar' && 'Buscar Certificado'}
          {aba === 'revogar' && 'Revogar Certificado'}
        </h2>

        {aba === 'registrar' && (
          <form onSubmit={handleRegistrar}>
            <div style={{ marginBottom: '10px' }}>
              <input
                name="id"
                placeholder="ID do Certificado"
                value={dadosFormulario.id}
                onChange={handleMudancaInput}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <input
                name="nomeAluno"
                placeholder="Nome do Aluno"
                value={dadosFormulario.nomeAluno}
                onChange={handleMudancaInput}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <input
                name="nomeCurso"
                placeholder="Nome do Curso"
                value={dadosFormulario.nomeCurso}
                onChange={handleMudancaInput}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '8px' }}>
              Registrar Certificado
            </button>
          </form>
        )}

        {aba === 'buscar' && (
          <form onSubmit={handleBuscar}>
            <div style={{ marginBottom: '10px' }}>
              <input
                placeholder="ID do Certificado"
                value={idBusca}
                onChange={(e) => setIdBusca(e.target.value)}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '8px' }}>
              Buscar Certificado
            </button>
          </form>
        )}

        {aba === 'revogar' && (
          <form onSubmit={handleRevogar}>
            <div style={{ marginBottom: '10px' }}>
              <input
                placeholder="ID do Certificado"
                value={idRevogacao}
                onChange={(e) => setIdRevogacao(e.target.value)}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '8px' }}>
              Revogar Certificado
            </button>
          </form>
        )}

        {erro && (
          <div style={{ 
            marginTop: '20px', 
            padding: '10px', 
            backgroundColor: '#ffebee', 
            color: '#c62828',
            borderRadius: '4px'
          }}>
            {erro}
          </div>
        )}

        {resultado && (
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
            {typeof resultado === 'string' ? (
              resultado
            ) : (
              <div>
                <p><strong>ID:</strong> {resultado.id}</p>
                <p><strong>Aluno:</strong> {resultado.nomeAluno}</p>
                <p><strong>Curso:</strong> {resultado.nomeCurso}</p>
                <p><strong>Data de Emissão:</strong> {resultado.dataEmissao}</p>
                <p><strong>Status:</strong> {resultado.ehValido ? 'Válido' : 'Revogado'}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistroCertificados;