# Pet-adoption

### ¡Bienvenido a nuestra página de adopción de animales!

En nuestro sitio web, nos dedicamos a promover y facilitar la adopción de animales en busca de un hogar amoroso. Creemos firmemente en brindar una segunda oportunidad a estos maravillosos seres vivos y conectarlos con familias comprometidas y responsables.

Aquí encontrarás una amplia variedad de animales disponibles para adopción, desde perros y gatos hasta pequeñas mascotas como conejos y hamsters. Cada uno de ellos tiene su propia historia y personalidad única, esperando ansiosamente encontrar un hogar lleno de cariño y cuidado.
Nuestro objetivo es hacer que el proceso de adopción sea fácil y transparente. En nuestra página, podrás explorar perfiles detallados de los animales disponibles, incluyendo información sobre su edad, tamaño, nombre y una pequeña descripcioón además encontrarás fotos adorables que te ayudarán a conocerlos mejor.

Una vez que encuentres un animal que roba tu corazón, puedes utilizar la información de contacto que se encuentra en línea para ponerte en contacto y  dar seguimiento al proceso. Una vez se pongan de acuerdo habrá un nuevo compañero peludo en hogar.
¡Únete a nosotros en esta hermosa misión de darle un hogar lleno de amor y felicidad a un animal necesitado! Explora nuestra página y comienza el emocionante viaje hacia la adopción de tu compañero perfecto.


## Instalación de Node js y NPM
Para empezar debes instalar node js.
El siguiente link contiene las diferentes versiones según tu sistema operativo

https://nodejs.org/en/download

o bien sí tienes sistema Windows (x64) utiliza el siguiente link

https://nodejs.org/es 

![App Screenshot](https://d2ms8rpfqc4h24.cloudfront.net/Install_Node_js_64_bit_Version_a789f12c8f.png)


Después sigue los pasos


![App Screenshot](https://d2ms8rpfqc4h24.cloudfront.net/Install_NPM_and_Node_js_dfb6f2ff29.png)

Escoge la ruta en la que quieres que se guarde (De preferencia no edites la información y solo da clic en siguiente)

![App Screenshot](https://d2ms8rpfqc4h24.cloudfront.net/uploads/2021/10/Choose-Path-to-Install-Node.js.png)

Aquí indíca que es lo que se va a instalar, sólo da clic en siguiente 
![App Screenshot](https://d2ms8rpfqc4h24.cloudfront.net/Select_Node_js_Features_to_install_0847ad9e3a.png)

Finalmente da clic en "Install"

![App Screenshot](https://d2ms8rpfqc4h24.cloudfront.net/uploads/2021/10/Final-Step-of-Node.js-Installation.png)

Si todo se hizo correctamente deberías tener instalado Node js y Npm package manager.
Para comprobar solo debes abrir tu terminal y escribir lo siguiente: 

![App Screenshot](https://d2ms8rpfqc4h24.cloudfront.net/uploads/2021/10/Check-Node.js-and-NPM-Version.png)



```bash
  node -v
```
y también 
```bash
  npm -v
```

![App Screenshot](https://d2ms8rpfqc4h24.cloudfront.net/uploads/2021/10/Frequent-Update-of-Node-and-NPM.png)

El resultado debe dar la version de lo que instalaste respectivamente, no te preocupes si las versiones son diferentes porque probablemente hayas descargado una version más reciente.


## Instalación de Git
Para descargar el proyecto de una manera más sencilla y facil debes instalar Git, en el siguiente video explica como instalarlo.


https://www.youtube.com/watch?v=cYLapo1FFmA

Una vez instalado Git abre tu consola y dirigete a la ruta donde vas a guardar el proyecto.
(Para moverte entre las rutas de utiliza el operador "cd").

Sí estamos en la ruta "C:\" y queremos movernos a la ruta "C:\documentos/escuela" ingresamos el siguiente comando en la consola
```bash
cd documentos/escuela
```
Una vez que estemos en la ruta donde queremos que se encuentre nuestro proyecto introducimos el siguiente comando en la consola
```bash
git clone https://github.com/Champagnepagcois/petadoption.git
```

En la consola veras como se empieza a descargar el archivo, verás algo como esto :
![App Screenshot](https://opensource.com/sites/default/files/u128651/git_guide12.png)


## No descargaste Git?

Si no descargaste git no hay problema también puedes obtener el código descargandolo directamente como un archivo comprimido zip y después descomprimiendolo.

1. Ingresa a la página donde esta el código

https://github.com/Champagnepagcois/petadoption

2. Da clic en el boton verde donde dice "Code" después clic en la opción que esta hasta abajo que tiene la leyenda "Download zip".

![App Screenshot](https://helpdeskgeek.com/wp-content/pictures/2021/06/11CodeButtonDownloadZip.png)

3. Mueve el archivo a donde sea que lo vas a descomprimir y procede a descomprimirlo.


## Correr programa

Una vez que tengas el proyecto descargado, ya sea por medio de Git o por medio del archivo comprimido (Recuerda que ya debe estar descomprimido), es hora de ejecutar el proyecto, asi que haz lo siguiente:
1. Abre tu consola y ubicate en la ruta que esta la carpeta principal del proyecto (La carpeta que contiene todo).
2. Ingresa el siguiente comando en la terminal:
```bash
cd petadoption
```
Esto con la finalidad de ubicarnos dentro de la carpeta.

3. Una vez dentro de la carpeta principal ingresa el siguiente comando en la terminal:

```bash
npm install
```
En este paso veras que se empiezan a descargar unas cosas, espera a que termine la instalación para seguir con el siguiente paso.
4. Después de que termino la descarga ingresa el siguiente comando en la terminal:
```bash
npm run dev
```
5. Listo :)
Ya terminaste con todos los pasos, ahora en la consola te indicará cuando termine de cargar y te indicará una url en la consola, ahora sólo debes ingresar a esa url, en este proyecto se debería estar ejecutando en la siguiente url:

http://localhost:3000/





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
