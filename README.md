# Proyecto Beneficiarios

Sistema de gestión de beneficiarios, patrón **MVC**, hecho con **Next.js (App Router) + MySQL**.

## Módulos incluidos (todos con CRUD completo: consultar, crear, actualizar, eliminar)

| Módulo | Ruta | Tabla en BD |
|---|---|---|
| Localidades | /localidades | Localidad |
| Discapacidad | /discapacidad | Discapacidad |
| Hechos | /hechos | Hechos |
| Sexo | /sexo | Sexo |
| Zona Colegio | /zona | Zona_colegio |

## Estructura MVC

```
db/             -> conexión a MySQL (connection.js)
models/         -> lógica SQL de cada tabla
app/api/        -> controladores (rutas API REST)
app/<modulo>/   -> vistas (React) + su CSS exclusivo
app/Header.js   -> menú de navegación global
```

## Instalación y puesta en marcha (XAMPP)

### 1. Base de datos
1. Inicia Apache y MySQL en XAMPP.
2. Ve a http://localhost/phpmyadmin
3. Crea una base de datos llamada `proyecto_beneficiario`.
4. Pestaña Importar -> selecciona `proyecto_beneficiario.sql` (incluido en este proyecto) -> Importar.

### 2. Variables de entorno
Renombra el archivo `env-ejemplo.txt` a `.env.local` (debe quedar en la raíz del proyecto) y ajusta tus credenciales si es necesario:

```
DATABASE_URL="mysql://root:@localhost:3306/proyecto_beneficiario"
```

### 3. Instalar dependencias
```
npm install
```

### 4. Ejecutar
```
npm run dev
```

Abre http://localhost:3000

## Notas
- El proyecto usa mysql2 con un pool de conexiones (ver db/connection.js).
- Cada módulo es independiente: modelo propio, controlador propio (GET/POST y PUT/DELETE por id) y vista propia con su CSS exclusivo (CSS Modules, sin Tailwind).
- Para agregar un nuevo módulo, copia la estructura de "sexo" (la más simple, 1 columna) o de "localidades" (2 columnas) y ajusta nombres de tabla/columnas.
