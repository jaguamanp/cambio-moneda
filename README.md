# Proyecto de Cambio de Moneda

Este es un proyecto desarrollado en Angular con Ionic te permite consultar tasas de cambio de monedas utilizando una API externa. La clave de acceso a la API se configura mediante el archivo de entorno (`environment`).

## Características

- Conversión de monedas entre diferentes divisas.
- Consulta en tiempo real de las tasas de cambio.
- Interfaz de usuario intuitiva y responsiva.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Angular CLI](https://angular.io/cli) (versión 13 o superior)
- Una cuenta en el proveedor de la API de cambio de moneda (por ejemplo, [ExchangeRate-API](https://www.exchangerate-api.com/) o cualquier otra API similar).

## Configuración del proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/jaguamanp/cambio-moneda.git
cd cambio-moneda
```

### 2. Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

### 3. Configurar la clave API

Abre el archivo de entorno `src/environments/environment.ts` y agrega tu clave de API:

```typescript
export const environment = {
  production: false,
  apiKey: 'TU_API_KEY_AQUI',
  apiUrl: 'https://api.fastforex.io' // URL base de la API
};
```

Si tienes un entorno de producción, también debes configurar el archivo `src/environments/environment.prod.ts` de la misma manera.

### 4. Ejecutar el proyecto

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
ng serve
```

La aplicación estará disponible en [http://localhost:4200](http://localhost:4200).

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```
src/
├── app/
│   ├── home/             # home de la aplicación
│   ├── services/         # Servicios para la lógica de negocio
│   └── app.module.ts     # Módulo principal
├── assets/               # Recursos estáticos
├── environments/         # Archivos de entorno
├── index.html            # Archivo principal HTML
└── styles.css            # Estilos globales
```

## Uso

1. Ingresa las monedas de origen y destino en el formulario.
2. Introduce la cantidad a convertir.
3. Presiona el botón de "Convertir" para obtener el resultado en tiempo real.

Los archivos generados estarán en la carpeta `dist/`. Puedes desplegarlos en cualquier servidor web.

## Tecnologías utilizadas

- [Angular](https://angular.io/)
- [Ionic](https://ionicframework.com/)
- [Bootstrap](https://getbootstrap.com/) (opcional para estilos)
- API de cambio de moneda (por ejemplo, [ExchangeRate-API](https://www.exchangerate-api.com/))

## Autor

Desarrollado por [José Guamán P].

