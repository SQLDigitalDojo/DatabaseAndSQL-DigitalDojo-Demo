CREATE SCHEMA VENDITE;
CREATE SCHEMA MAGAZZINO;
CREATE SCHEMA UTENTI;

CREATE TABLE utenti.clienti (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 Nome varchar(500),
 Indirizzo varchar(500),
 username varchar(500),
 passwordCliente varchar(500)
 );

CREATE TABLE vendite.vendita (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 idClient INT REFERENCES utenti.clienti(id),
 note varchar(500),
 DataVendita DATETIME DEFAULT CURRENT_TIMESTAMP
);

 CREATE TABLE vendite.statoPagamenti (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 stato varchar(500)
 );

CREATE TABLE vendite.pagamenti (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 idVendita INT REFERENCES vendite.vendita(id),
 idStatoPagamento INT REFERENCES vendite.statoPagamenti(id),
 importo DECIMAL(10,2),
 dataAggiornamento DATETIME ON UPDATE CURRENT_TIMESTAMP
 ); 

 
CREATE TABLE vendite.statoSpedizioni (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 stato varchar(500)
 );
 
 
 CREATE TABLE vendite.spedizioni (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 ddt varchar(500),
 idStatoSpedizione INT REFERENCES vendite.statoSpedizioni(id),
 idVendita INT REFERENCES vendite.vendita(id),
 DataSpedizione DATETIME DEFAULT CURRENT_TIMESTAMP
 );
 
 CREATE TABLE vendite.carello (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 idVendita INT REFERENCES vendite.vendita(id),
 idprodotto INT REFERENCES vendite.prodotti(id)
 );
  
 CREATE TABLE magazzino.magazzino (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 indirizzo varchar(500)
 );
 
CREATE TABLE magazzino.categoria (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 tipologia varchar(500),
 particolarita varchar(500)
 );
  
CREATE TABLE magazzino.prodotti (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 idMagazzino INT REFERENCES vendite.magazzino(id),
 idCategoria INT REFERENCES vendite.categoria(id),
 nome varchar(500),
 immagine varchar(500),
 prezzo DECIMAL(10,2) 
);

