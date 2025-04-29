# Usa una imagen oficial de Node.js y TypeScript
FROM mcr.microsoft.com/devcontainers/typescript-node:latest

# Establece el directorio de trabajo
WORKDIR /workspace

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

# Copia dependencias de Node si existen
COPY package.json package-lock.json* ./
RUN if [ -f package.json ]; then npm ci; fi

# Exponer puertos de desarrollo Angular y Spring Boot
EXPOSE 4200 8080

# Mantiene el container vivo
CMD [ "sleep", "infinity" ]
