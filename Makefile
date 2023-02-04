all:
	make -C api dev
	make -C salivaqa dev

docker:
	docker-compose up

push:
	make -C api push
	make -C salivaqa push

clean:
	make -C api clean
	make -C salivaqa clean

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "all  		Run the applications in development mode"
	@echo "docker 		Run the applications in docker"
	@echo "push 		Push the applications to docker"
	@echo "clean 		Clean the applications"
