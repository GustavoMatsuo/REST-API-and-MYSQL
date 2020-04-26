## REST-API e MYSQL usando Docker
Não tenho muita experiência em docker por isso fiz o projeto para poder aplicar o que tenho de conhecimento sobre,  devem existir vários erros ou formas melhores para fazer, caso saiba, podem me mandar por email do perfil ficaria muito grato.

**Para rodar o projeto:**
1. ``git clone https://github.com/GustavoMatsuo/REST-API-and-MYSQL.git``.
2. Dentro do projeto ``docker-compose build``.
3. E logo após o build `` docker network ls``, descubra qual é a network que esta sendo usada para os container (geralmente esta como "rest-api-and-mysql_default").
4. Coloque ``docker inspect {nome ou id do container}`` e veja o ip do Gateway.
5. Substitua o IP no package.json de onde estiver BANCO_IP.
6. Depois é so mandar ``docker-compose up`` :rocket:

Made with :heart: by Gustavo Matsuo.