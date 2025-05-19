create database GreenPortal;
use GreenPortal;


-- ----------------------------------------------------------------------------------------------------------------------------------------------

-- Criação de tabelas principais

create table usuarios(
idUsuario int primary key auto_increment,
nome varchar(20) not null,
sobrenome varchar(30),
genero varchar(15) not null,
dataNascimento date not null,
email varchar(50) not null,
senha varchar(80) not null,
temporadaFavorita int,
episodioFavorito int
);

create table jogos(
idJogo int primary key auto_increment,
nome varchar(40) not null,
descricao varchar(70) not null
);

create table quizzes(
idQuiz int primary key auto_increment,
nome varchar(45) not null,
descricao varchar(75) not null,
dataHoraQuiz datetime not null,
tipoQuiz varchar(40) not null
);

create table noticias(
idNoticia int primary key auto_increment,
nome varchar(40) not null,
descricao varchar(75) not null
);


-- ----------------------------------------------------------------------------------------------------------------------------------------------

-- Conexões entre tabelas, relação de muitos para muitos

-- Relação entre tabela jogos e usuarios (Um usuário pode jogar varios jogos, um jogo pode ser jogado por vários usuários).
create table jogos_usuarios(
fkUsuario int not null,
fkJogo int not null,
pontuacaoObitida int not null,
dataHoraJogada datetime not null,
status varchar(20) not null,
primary key(fkJogo, fkUsuario),
foreign key (fkJogo) references jogos(idJogo),
foreign key (fkUsuario) references usuarios(idUsuario)
);

-- Relação entre tabela usuário e tabela quiz (Um usuário pode jogar vários quizzes e um quiz pode ser jogado por vários usuários).
create table usuarios_quizzes(
fkUsuario int not null,
fkQuiz int not null,
dataHoraQuiz datetime not null,
resultado varchar(40) not null,
primary key(fkUsuario, fkQuiz),
foreign key (fkUsuario) references usuarios(idUsuario),
foreign key (fkQuiz) references quizzes(idQuiz)
);

-- Relação entre tabela usuarios e tabela notícias (Um usuário pode ler várias notícias e um notícia pode ser acessada por vários usários).
create table usuario_noticias(
fkUsuario int not null,
fkNoticia int not null,
dataHoraLeitura datetime not null,
primary key(fkUsuario, fkNoticia),
foreign key (fkUsuario) references usuarios(idUsuario),
foreign key (fkNoticia) references noticias(idNoticia)
);
