
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; ----Cambiala con la tua password

UPDATE Vendite.vendita SET DataVendita = STR_TO_DATE('21,5,2019','%d,%m,%Y') WHERE ID>0 AND ID < 200;
UPDATE Vendite.vendita SET DataVendita = STR_TO_DATE('22,5,2019','%d,%m,%Y') WHERE ID>200 AND ID < 400;
UPDATE Vendite.vendita SET DataVendita = STR_TO_DATE('23,5,2019','%d,%m,%Y') WHERE ID>400 AND ID < 600;
UPDATE Vendite.vendita SET DataVendita = STR_TO_DATE('24,5,2019','%d,%m,%Y') WHERE ID>600 AND ID < 800;
UPDATE Vendite.vendita SET DataVendita = STR_TO_DATE('25,5,2019','%d,%m,%Y') WHERE ID>800 AND ID < 1000;
