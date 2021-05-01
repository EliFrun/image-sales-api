.DEFAULT_GOAL := help

help:
	@ echo "	build: build container with deps"
	@ echo "	run: start docker containers and application"


build:
	bundle install
	docker-compose build


run: build
	docker-compose up > /dev/null

shell:
	docker exec -it shopify-interview_app_1 bash