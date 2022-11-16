# Imagem do container
FROM node:16.13.0
# Enviroment variable
ENV WORKDIR=/usr/workspace/api/app
# Indica qual é o diretório de trabalho
WORKDIR ${WORKDIR}
# Copia todos os arquivos para o workdir
COPY . .
RUN npm ci
RUN npm install -g nodemon

# CMD ["npm", "start"]