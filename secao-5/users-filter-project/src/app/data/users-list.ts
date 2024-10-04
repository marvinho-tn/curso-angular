import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
    {
        nome: "Alice Ribeiro",
        email: "alice.ribeiro@example.com",
        senha: "abcdef1234",
        idade: "28",
        endereco: {
            rua: "Avenida das Flores",
            numero: 350,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11987654321",
        ativo: true,
        funcao: "Designer Gráfico",
        dataCadastro: "2024-09-10T10:30:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-09-10T10:30:00.000Z"
        }
    },
    {
        nome: "Lucas Pereira",
        email: "lucas.pereira@example.com",
        senha: "senha123",
        idade: "25",
        endereco: {
            rua: "Rua das Acácias",
            numero: 400,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21912345678",
        ativo: true,
        funcao: "Analista de Dados",
        dataCadastro: "2024-09-15T11:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-09-14T20:00:00.000Z"
        }
    },
    {
        nome: "Fernanda Silva",
        email: "fernanda.silva@example.com",
        senha: "qwerty5678",
        idade: "30",
        endereco: {
            rua: "Praça da Liberdade",
            numero: 50,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "3132345678",
        ativo: true,
        funcao: "Gerente de Projetos",
        dataCadastro: "2024-09-12T09:15:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-09-12T09:15:00.000Z"
        }
    },
    {
        nome: "Carlos Alberto",
        email: "carlos.alberto@example.com",
        senha: "password123",
        idade: "45",
        endereco: {
            rua: "Avenida Brasil",
            numero: 600,
            cidade: "Curitiba",
            estado: "PR",
            pais: "Brasil"
        },
        telefone: "4123456789",
        ativo: true,
        funcao: "Engenheiro",
        dataCadastro: "2024-09-20T08:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-09-18T16:00:00.000Z"
        }
    },
    {
        nome: "Juliana Costa",
        email: "juliana.costa@example.com",
        senha: "juli12345",
        idade: "38",
        endereco: {
            rua: "Rua do Comércio",
            numero: 78,
            cidade: "Florianópolis",
            estado: "SC",
            pais: "Brasil"
        },
        telefone: "4834567890",
        ativo: true,
        funcao: "Marketing Digital",
        dataCadastro: "2024-09-22T14:45:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-09-22T14:45:00.000Z"
        }
    },
    {
        nome: "Thiago Santos",
        email: "thiago.santos@example.com",
        senha: "th1ag0pass",
        idade: "31",
        endereco: {
            rua: "Rua das Oliveiras",
            numero: 1200,
            cidade: "Salvador",
            estado: "BA",
            pais: "Brasil"
        },
        telefone: "7198765432",
        ativo: true,
        funcao: "Analista Financeiro",
        dataCadastro: "2024-09-18T11:30:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-09-18T11:30:00.000Z"
        }
    },
    {
        nome: "Roberta Almeida",
        email: "roberta.almeida@example.com",
        senha: "rober12345",
        idade: "29",
        endereco: {
            rua: "Avenida do Pôr do Sol",
            numero: 9,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11998765432",
        ativo: true,
        funcao: "Professora",
        dataCadastro: "2024-09-25T16:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-09-25T16:00:00.000Z"
        }
    },
    {
        nome: "Gustavo Lima",
        email: "gustavo.lima@example.com",
        senha: "gustavo2024",
        idade: "26",
        endereco: {
            rua: "Rua da Esperança",
            numero: 500,
            cidade: "Manaus",
            estado: "AM",
            pais: "Brasil"
        },
        telefone: "9212345678",
        ativo: false,
        funcao: "Jornalista",
        dataCadastro: "2024-09-21T14:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-09-20T10:00:00.000Z"
        }
    },
    {
        nome: "Danielle Martins",
        email: "danielle.martins@example.com",
        senha: "danielle123",
        idade: "34",
        endereco: {
            rua: "Rua das Margaridas",
            numero: 85,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "3134567890",
        ativo: true,
        funcao: "Veterinária",
        dataCadastro: "2024-09-23T12:30:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-09-23T12:30:00.000Z"
        }
    },
    {
        nome: "André Gomes",
        email: "andre.gomes@example.com",
        senha: "andre2024",
        idade: "37",
        endereco: {
            rua: "Rua do Sol",
            numero: 22,
            cidade: "Fortaleza",
            estado: "CE",
            pais: "Brasil"
        },
        telefone: "8598765432",
        ativo: false,
        funcao: "Consultor",
        dataCadastro: "2024-09-24T13:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-09-20T15:00:00.000Z"
        }
    },
    {
        nome: "Marvin Thomaz do Nascimento",
        email: "marvinthomaz@gmail.com",
        senha: "12345689",
        idade: "33",
        endereco: {
            rua: "Rua da Cachoeira",
            numero: 1500,
            cidade: "Paraisopolis",
            estado: "MM",
            pais: "Brasil"
        },
        telefone: "212244338855",
        ativo: true,
        funcao: "Desenvolvedor",
        dataCadastro: "2024-09-02T14:15:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-09-02T14:15:00.000Z"
        }
    },
    {
        nome: "Bruno Costa",
        email: "bruno.costa@example.com",
        senha: "1234567890",
        idade: "29",
        endereco: {
            rua: "Rua das Palmeiras",
            numero: -0,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21987654321",
        ativo: false,
        funcao: "Desenvolvedor",
        dataCadastro: "2024-09-10T10:30:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-09-10T10:30:00.000Z"
        }
    },
    {
        nome: "Carla Mendes",
        email: "carla.mendes@example.com",
        senha: "senhaIncorreta",
        idade: "25",
        endereco: {
            rua: "Avenida do Comércio",
            numero: 1000,
            cidade: "",
            estado: "BA",
            pais: "Brasil"
        },
        telefone: "71987654321",
        ativo: true,
        funcao: "",
        dataCadastro: "2024-09-11T10:30:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2024-09-09T10:30:00.000Z"
        }
    },
    {
        nome: "Daniela Souza",
        email: "daniela.souza@example.com",
        senha: "senhaSegura123",
        idade: "31",
        endereco: {
            rua: "Rua da Alegria",
            numero: 500,
            cidade: "Curitiba",
            estado: "PR",
            pais: ""
        },
        telefone: "41987654321",
        ativo: true,
        funcao: "Gerente de Projetos",
        dataCadastro: "2024-09-12T10:30:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: ""
        }
    },
    {
        nome: "Eduardo Lima",
        email: "eduardo.lima@example.com",
        senha: "",
        idade: "27",
        endereco: {
            rua: "Rua dos Bandeirantes",
            numero: 750,
            cidade: "Fortaleza",
            estado: "CE",
            pais: "Brasil"
        },
        telefone: "85987654321",
        ativo: true,
        funcao: "Analista de Sistemas",
        dataCadastro: "2024-09-13T10:30:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2024-09-12T10:30:00.000Z"
        }
    },
    {
        nome: "Fernanda Oliveira",
        email: "fernanda.oliveira@example.com",
        senha: "mypassword",
        idade: "22",
        endereco: {
            rua: "Avenida Central",
            numero: 250,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31987654321",
        ativo: true,
        funcao: "Estagiária",
        dataCadastro: "2024-09-14T10:30:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "dataErrada"
        }
    },
];
