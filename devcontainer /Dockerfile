# Usa una imagen con Node.js y TypeScript preinstalado
FROM mcr.microsoft.com/devcontainers/typescript-node:latest

# Establecer directorio de trabajo
WORKDIR /workspace

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Instalar dependencias del proyecto si hay un package.json
COPY package.json package-lock.json* ./
RUN npm ci || true

# Exponer puerto 4200 para Angular
EXPOSE 4200

# Comando por defecto al abrir el container
CMD [ "sleep", "infinity" ]
