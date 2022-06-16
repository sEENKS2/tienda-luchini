# Instalacion

Los pasos a seguir para la instalacion y la visualizacion son:

git bash 

$ git clone https://github.com/sEENKS2/tienda-luchini.git
$ cd tienda-luchini
$ npm install
$ npm start

Y se ejecutara en el localhost:3000


# Variables de entorno

- Ver ['.env.example'] (https://github.com/sEENKS2/tienda-luchini/blob/main/.env.example) para ver un ejemplo.

# Firebase Docs

- El documento 'products' tiene que tener los campos: category [string],
                                                    description [string], 
                                                    img [string], 
                                                    name [string], 
                                                    price [number], 
                                                    stock [number]

- Al generar la orden se genera un documento con: buyer {apellido, nombre, direccion, email, telefono },
                                                items { id, name, price, quantity },
                                                total,

# Creado con

- [Create-React-App]
- [Firebase / Firestore]
- [Toastify]
- [React-Bootstrap]
- [React-Hook-Form]

# Rutas

Guia de rutas:
- Ruta con path '/' Lleva al index de la pagina
- Ruta con path '/category/:categoryId' filtra los productos por categoria
- Ruta con path '/detail/:productId' filtra los productos por su ID
- Ruta con path '/checkout' muestra un form para crear las ordenes de compra
- Ruta con path '*' deriva en un error por pagina inexsistente en la app