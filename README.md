# Como desplegar esta aplicacion con docker

primero deben generar la imagen docker con el archivo Docker file que se encuentar en estte proyecto.
para esto se debe ejecutar

docker build -t shopping .

una vez generada la imagen se puede verificar con : `docker images` que aparesca la imagen creada con el nombre `shopping`

luego levantar la imagen con el siguiente comando.

`docker run -d -it -p 4200:80 shopping`

en caso de que se requiera levantar en otro puerto, solamente cambiar el valor de `4200` al puerto que se desee usar,

## Ingresar a aplicacion.

para ingresar a la aplicacion dirigirse a `http://localhost:4200`

# Shoppingcart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
