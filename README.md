# SHOPIFY INTERN CHALLENGE

## DEMO

[![Demonstration](TODO: add picture)](TODO: add video link "")

## SETUP

To setup the project locally, ensure the code is executed from a unix like shell and the following packages are installed:
- `docker`
- `make`

Once those tools are installed, ensure that the docker daemon is running on your machine. Then execute `make up`.

this command will launch the frontend, backend, and a fresh db instance (not persistent db storage has not been implemented).

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

`GET /image` - list all images

`GET /image/:image_id` - list information about specific image

`POST /image` - create 1 or more images - follow format from post.py

`DELETE /image/:image_id` - delete a specific image

`GET /user` - list all users

`GET /user/:user_id` - list information about specific user

`POST /user` - create 1 or more users - follow format from post.py

`DELETE /user/:user_id` - delete a specific user

`GET /property` - list all properties of all images

`GET /property/:name` - list all images with a given property name

`POST /transaction` - execute a transaction between 2 users - see post_transaction.py
