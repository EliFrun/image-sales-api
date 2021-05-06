.DEFAULT_GOAL := help

help:
	@ echo "	build: build container with deps"
	@ echo "	up: start docker containers"
	@ echo "	setup: populate db with neccessary rails data"
	@ echo "	update: restart app container with new code changes"
	@ echo "	down: kill all containers"
	@ echo "	shell: interactive shell for the rails app"


setup:
	./scripts/setup/setup_postgres.sh


build:
	bundle install
	docker build -t 'app' .


up: build
	docker-compose up -d #> /dev/null

setup:	up
	bundle exec dotenv rake db:migrate
	#todo: add db populating script for testing

update: build
	docker-compose up -d #> /dev/null

down:
	docker-compose down

shell:
	docker exec -it app bash