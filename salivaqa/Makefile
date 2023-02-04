dev:
	yarn dev

docker:
	docker build -t ghcr.io/technocultureresearch/salivaqa:latest .
	docker run -p 3000:3000 ghcr.io/technocultureresearch/salivaqa:latest

push:
	docker push ghcr.io/technocultureresearch/salivaqa:latest

install:
	yarn install

clean:
	rm -rf node_modules

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "dev  		Run the application in development mode"
	@echo "docker 		Run the application in docker"
	@echo "push 		Push the application to docker"
	@echo "install  	Install the application"
	@echo "clean 		Remove node_modules"
