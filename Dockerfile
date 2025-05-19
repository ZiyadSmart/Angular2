
FROM node:22.14.0

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Copier le reste du code source
COPY . .

# Exposer le port
EXPOSE 4200

# Modifier votre script start dans package.json pour utiliser --host 0.0.0.0
# Ou utiliser directement cette commande ici
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

