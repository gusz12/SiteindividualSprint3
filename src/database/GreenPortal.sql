create database GreenPortal;
use GreenPortal;

-- ----------------------------------------------------------------------------------------------------------------------------------------------

-- Criação de tabelas principais

create table usuarios(
idUsuario int primary key auto_increment,
nome varchar(20) not null,
foto varchar(10000),
genero varchar(15) not null,
dataNascimento date not null,
email varchar(50) not null,
senha varchar(80) not null,
temporadaFavorita int,
episodioFavorito int
);
select * from GreenPortal.usuarios;
create table jogos(
idJogo int primary key auto_increment,
nome varchar(40) not null,
descricao varchar(70) not null
);
insert into jogos(nome, descricao)
values
('jogo1', 'TwoBrothers'),
('jogo2', 'Rick vs Morty'),
('jogo3', 'Rick canta com você!');

create table quizzes(
idQuiz int primary key auto_increment,
nome varchar(45) not null
);

insert into quizzes(nome)
values
('quiz1'),
('quiz2'),
('quiz3');

create table noticias(
idNoticia int primary key auto_increment,
nome varchar(40) not null
);

INSERT INTO noticias (nome)
value
('Notícia1'),
('Notícia2'),
('Notícia3');

create table aviso(
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuarios(idUsuario)
);
-- ----------------------------------------------------------------------------------------------------------------------------------------------

-- Conexões entre tabelas, relação de muitos para muitos

-- Relação entre tabela jogos e usuarios (Um usuário pode jogar varios jogos, um jogo pode ser jogado por vários usuários).
create table jogos_usuarios(
fkUsuario int not null,
fkJogo int not null,
pontuacaoObitida int not null,
datahora datetime,
foreign key (fkJogo) references jogos(idJogo),
foreign key (fkUsuario) references usuarios(idUsuario)
);
select * from jogos_usuarios;
-- Relação entre tabela usuário e tabela quiz (Um usuário pode jogar vários quizzes e um quiz pode ser jogado por vários usuários).
create table usuarios_quizzes(
fkUsuario int not null,
fkQuiz int not null,
resultado int not null,
descricao varchar(100),
datahora datetime,
foreign key (fkUsuario) references usuarios(idUsuario),
foreign key (fkQuiz) references quizzes(idQuiz)
);

select * from usuarios_quizzes;
-- Relação entre tabela usuarios e tabela notícias (Um usuário pode ler várias notícias e um notícia pode ser acessada por vários usários).
create table usuario_noticias(
fkUsuario int not null,
fkNoticia int not null,
datahora datetime,
foreign key (fkUsuario) references usuarios(idUsuario),
foreign key (fkNoticia) references noticias(idNoticia)
);

select * from usuario_noticias; 



-- quais jogos ele ficou mais tempo
select 
u.idUsuario,
j.nome,
ju.fkJogo,
sum(ju.pontuacaoObitida) as Tempo_Total
from jogos_usuarios ju
inner join usuarios u on ju.fkUsuario = u.idUsuario
inner join jogos j on j.idJogo = ju.fkJogo
where u.idUsuario = 1 
group by u.idUsuario, j.nome, ju.fkJogo;
 