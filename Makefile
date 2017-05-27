run: clean build
	docker-compose up

background: clean build
	docker-compose up -d

build:
	docker build -t mcdermottsolutions/billtracker-flask:latest ./

clean:
	@docker-compose kill || echo 'nothing to kill'
	@docker-compose rm -f || echo 'nothing to rm'

logs:
	docker-compose logs -f server
