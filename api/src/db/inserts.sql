INSERT INTO public.ivas
(name, percentage, "createdAt", "updatedAt")
VALUES('0%', 0,CURRENT_DATE,CURRENT_DATE ),
	  ('12%',12, CURRENT_DATE,CURRENT_DATE ),
	  ('No objeto de impuesto',0, CURRENT_DATE,CURRENT_DATE ),
	  ('Exento de IVA',0, CURRENT_DATE,CURRENT_DATE ),
	  ('14%',14, CURRENT_DATE,CURRENT_DATE );
	  

INSERT INTO public.ice
(name, percentage, "createdAt", "updatedAt")
VALUES('0%', 0,CURRENT_DATE,CURRENT_DATE );

INSERT INTO public."accounts"
(email, "password", "username", "createdAt", "updatedAt")
VALUES('rodemore@espol.edu.ec','$2y$07$Nt2VpZTwfvTpeLaLE78hGeueiOBQfBU4663yNudro5mxcPEMM7.Wq', 'rodemore', CURRENT_DATE,CURRENT_DATE),
('josdavil@espol.edu.ec','$2y$07$Nt2VpZTwfvTpeLaLE78hGeueiOBQfBU4663yNudro5mxcPEMM7.Wq', 'josdavil', CURRENT_DATE,CURRENT_DATE),
('jmluna@espol.edu.ec','$2y$07$P4FURPfVXKJMLSORV0rRFuVm9qrVb1/njfHyNYwspWtfdaQ016rFi', 'jmluna', CURRENT_DATE,CURRENT_DATE);

INSERT INTO public.clients
("name", address, phone, "accountId", "createdAt", "updatedAt")
values 
('Robert Moreno Carrillo', 'Prosperina Coop. 31 Agosto' ,'0954190823',1, CURRENT_DATE,CURRENT_DATE),
('Josue Davalos', 'Mapasingue Oeste', '0951212333',2, CURRENT_DATE,CURRENT_DATE),
('Jocellyn Luna', 'Guasmo Sur', '0954190823',3, CURRENT_DATE,CURRENT_DATE);

INSERT INTO public.categories
("name", "createdAt", "updatedAt")
values ('Tecnología', CURRENT_DATE, CURRENT_DATE),
('Inmuebles', CURRENT_DATE, CURRENT_DATE),
('Salud', CURRENT_DATE, CURRENT_DATE),
('Consumo', CURRENT_DATE, CURRENT_DATE);

INSERT INTO public.themes
(color, font, "name", "location", "createdAt", "updatedAt")
VALUES('#1A6094', 'Open Sans de Steve Matteson', 'Blue Theme', '', CURRENT_DATE, CURRENT_DATE);

INSERT INTO public.templates
("location", "createdAt", "updatedAt")
VALUES('', CURRENT_DATE, CURRENT_DATE);

INSERT INTO public.markets
(url, "templateId", "themeId", "createdAt", "updatedAt")
values
('www.google.com', 1, 1, CURRENT_DATE, CURRENT_DATE);

INSERT INTO public.products
(main_code, auxiliary_code, "categoryId", description, "name", on_sale, price, stock, "iceId", "ivaId", "marketId", "createdAt", "updatedAt", weight, unit)
VALUES('001', '051', 1, 'Laptop HP 14 pulgadas', 'Laptop HP 14 pulgadas 16Gb ram', true, 500.41, 5, 1, 2, 1, CURRENT_DATE, CURRENT_DATE, 0.4, 'lb'),
('005', '055', 1, 'Laptop Dell', 'Laptop Dell 14 pulgadas 8GB ram', true, 720.01, 10, 1, 2, 1, CURRENT_DATE, CURRENT_DATE, 0.4, 'lb'),
('002', '052', 1, 'Chromecast', 'Convierte tu tv en un smart con un Chromecast', true, 15.55, 20, 1, 2, 1, CURRENT_DATE, CURRENT_DATE, 50, 'gr'),
('003', '353', 2, 'Mueble de lujo', 'Mueble grande para toda la familia', true, 120.00, 3, 1, 2, 1, CURRENT_DATE, CURRENT_DATE, 120, 'lb');

INSERT INTO public.images
("productId", "location", "createdAt", "updatedAt")
values
(1, 'https://lh3.googleusercontent.com/proxy/wa8N1qo45STEn01T4aiMMuSmS1X9N4UIobt5JhxN8XO-xNp8h_4OafQFOoLrsoNRxAW1UkkZcyp39SZAgcKVpz96qU6YrAttpVot_5fWpM2iUQpgKfl7AafgYN5dBHzyleAr2lh5BzGQzbFiAkKgKnbQots0', CURRENT_DATE, CURRENT_DATE),
(1, 'https://livansud.vteximg.com.br/arquivos/ids/160708-1000-1000/laptop-hp-14-dq1059wm-14-core-i5-8gb-eckohogar-1.jpg?v=637537984742500000', CURRENT_DATE, CURRENT_DATE),
(4, 'https://imagenes.elcomercio.com/files/article_main_simple/uploads/2020/07/29/5f2204d3f2c62.jpeg', CURRENT_DATE, CURRENT_DATE),
(3, 'https://systemarket.com.ec/wp-content/uploads/2020/07/Chromecast-3-03.jpg', CURRENT_DATE, CURRENT_DATE),
(2, 'https://images-na.ssl-images-amazon.com/images/I/51if47n2aPL._AC_SL1000_.jpg', CURRENT_DATE, CURRENT_DATE);
