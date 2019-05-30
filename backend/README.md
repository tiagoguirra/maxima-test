# maxima-test
Aplicação de teste backend

## Configurações Iniciais
Executando a aplicação fora do docker ou sem passar as variaveis de ambiente 
descomente a linha 11 do arquivo 'server.js'
``` js
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
```
``` bash
# install dependencies
npm install

# Rodando servidor http em desenvolvimento (com hot heload)
npm run dev

# Rodando o servidor http em produção (sem hot heload)
npm run prod
```
## Variaveis de ambiente
Use o arquivo .env.exemple para criar o arquivo .env
```
# Ambiente production/development
NODE_ENV=development

#Porta da aplicação por padrão 8000
APP_PORT=8000

#Host do banco de dados mongo
APP_MONGOOSE_HOST=URL

#Banco de dados mongodb
APP_MONGOOSE_DATABASE=apptest 
```




