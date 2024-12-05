// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RegistroCertificados {
    struct Certificado {
        uint256 id;
        string nomeAluno;
        string nomeCurso;
        uint256 dataEmissao;
        bool ehValido;
    }
    
    address public proprietario;
    mapping(uint256 => Certificado) public certificados;
    
    event CertificadoRegistrado(uint256 indexed id, string nomeAluno, string nomeCurso);
    event CertificadoRevogado(uint256 indexed id);
    
    constructor() {
        proprietario = msg.sender;
    }
    
    modifier apenasProprietario() {
        require(msg.sender == proprietario, "Apenas o proprietário pode chamar esta função");
        _;
    }
    
    function registrarCertificado(
        uint256 _id,
        string memory _nomeAluno,
        string memory _nomeCurso
    ) public apenasProprietario {
        require(certificados[_id].id == 0, "ID de certificado já existe");
        
        certificados[_id] = Certificado({
            id: _id,
            nomeAluno: _nomeAluno,
            nomeCurso: _nomeCurso,
            dataEmissao: block.timestamp,
            ehValido: true
        });
        
        emit CertificadoRegistrado(_id, _nomeAluno, _nomeCurso);
    }
    
    function buscarCertificado(uint256 _id) public view returns (
        uint256 id,
        string memory nomeAluno,
        string memory nomeCurso,
        uint256 dataEmissao,
        bool ehValido
    ) {
        Certificado memory cert = certificados[_id];
        require(cert.id != 0, "Certificado não existe");
        
        return (
            cert.id,
            cert.nomeAluno,
            cert.nomeCurso,
            cert.dataEmissao,
            cert.ehValido
        );
    }
    
    function revogarCertificado(uint256 _id) public apenasProprietario {
        require(certificados[_id].id != 0, "Certificado não existe");
        require(certificados[_id].ehValido, "Certificado já está revogado");
        
        certificados[_id].ehValido = false;
        emit CertificadoRevogado(_id);
    }
}