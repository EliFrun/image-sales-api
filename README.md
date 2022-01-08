# SHOPIFY INTERN CHALLENGE

## DEMO

[![Demonstration](https://img.youtube.com/vi/atWp3MAlSp4/hqdefault.jpg)](https://www.youtube.com/watch?v=atWp3MAlSp4)

## SETUP

To setup the project locally, ensure the code is executed from a unix like shell and the following packages are installed:
- `npm`
- `docker`
- `make`

Once those tools are installed, ensure that the docker daemon is running on your machine. Then execute `make up`.

this command will launch the frontend, backend, and a fresh db instance (persistent db storage has not been implemented).

If the frontend container is exiting, run `make build-frontend-dev` which will create a `node_modules` folder and resolve dependency issues.
## TAKEDOWN

to takedown the project, run `make down`, this will kill all the containers

If you would like to also clean all cached container images on your system (not just from this project), run `make clean` which will delete pretty much all container information stored on your system

## CONTAINER DETAILS
### FRONTEND
located in the `frontend/` directory.
This is a barebones react app that allows users to perform CRUD operations via a UI.

### BACKEND
located in the `backend/` directory.
This is a rails application which serves the frontend. Using the default Rails ORM.

Once the server is up, the following endpoints have been implemented

`GET /product` - list all products

`GET /product/:product_id` - list information about specific product

`POST /product` - create 1 or more products

`DELETE /product/:product_id` - delete a specific product

`GET /products/csv` - export all products in a csv

`PUT /product/:product_id` - update values for an existing product
