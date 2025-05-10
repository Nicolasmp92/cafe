Especificaciones de la Aplicación de Gestión de Cafetería

1️⃣ Descripción General

La aplicación permitirá gestionar una cafetería optimizando el flujo de trabajo desde la toma de pedidos hasta la entrega. Contará con cuatro perfiles de usuario con funciones específicas, además de reportes y gestión de ventas.

2️⃣ Perfiles de Usuario

🔹 Perfil Administrativo (Admin)

Función principal: Supervisión, reportes y gestión total del sistema.

Accede a reportes de ventas, pedidos y tiempos.

Gestiona el inventario de productos.

Crea y edita usuarios y permisos.

Puede realizar todas las funciones de otros perfiles si es necesario.

🔹 Perfil Garzón / Caja

📌 Se pueden manejar como funciones separadas o dentro de un mismo perfil con permisos diferenciados.

Funciones del Garzón:

Ingresa pedidos manuales de clientes en la mesa o barra.

Envía las comandas a cocina.

Funciones de Caja:

Maneja el cobro y cierre de ventas.

Genera boletas o facturas.

🔹 Perfil Cocina

Función principal: Visualizar y gestionar pedidos en preparación.

Recibe comandas en tiempo real.

Puede marcar pedidos como preparados.

Filtra pedidos por estado (pendiente, en preparación, listo).

🔹 Perfil Cliente (Pedido por QR)

Función principal: Hacer pedidos de forma autónoma.

Escanea un QR en la mesa.

Accede al menú digital y realiza un pedido.

El sistema identifica la mesa y envía el pedido a cocina.

Opcional: Puede pagar desde la app si se integra pago online.

Visualiza el estado del pedido (En cocina, Listo, Entregado).

3️⃣ Funcionalidades Clave

🔸 Gestión de Pedidos

Pedido manual por garzón o digital por cliente con QR.

Flujo de estados: Pendiente → En preparación → Listo → Entregado.

Notificación en tiempo real para cocina y garzón.

🔸 Administración de Productos

CRUD de productos (crear, leer, actualizar, eliminar).

Categorización de productos: Café, Té, Snacks, Otros.

🔸 Reportería y Análisis

Ventas diarias, semanales y mensuales.

Tiempo promedio de entrega de pedidos.

Productos más vendidos.

Rendimiento de empleados (cantidad de pedidos atendidos, tiempo de atención, etc.).

🔸 Seguridad y Autenticación

Uso de JWT para autenticación.

Roles con permisos diferenciados.

Control de acceso a funcionalidades según perfil.

4️⃣ Tecnologías Utilizadas

🔹 Backend

Lenguaje: Java con Spring Boot.

Base de Datos: MySQL o SQLite.

Seguridad: Spring Security con JWT.

🔹 Frontend

Framework: Angular o React.

Consumo de API REST para interactuar con el backend.

🔹 Infraestructura

Despliegue en servidor cloud (Heroku, AWS, DigitalOcean, etc.).

Base de datos alojada en RDS (si usa MySQL) o local si usa SQLite.

5️⃣ Próximos Pasos

Definir si Garzón y Caja deben ser funciones separadas.

Determinar si los pedidos QR requieren aprobación antes de ser enviados a cocina.

Diseñar la arquitectura de la base de datos y la API REST.

Establecer el roadmap de desarrollo.

