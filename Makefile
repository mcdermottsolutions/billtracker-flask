run: clean
	docker-compose up

background: clean
	docker-compose up -d

clean:
	@docker-compose kill || echo 'nothing to kill'
	@docker-compose rm -f || echo 'nothing to rm'

logs:
	docker-compose logs -f server
