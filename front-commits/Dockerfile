FROM node:18.17

WORKDIR /nextapp

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


EXPOSE 3000

# Run the application
CMD ["npm", "start"]
