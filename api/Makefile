ENTRYPOINT = src/main.py

dev:
	pipenv run python $(ENTRYPOINT)

docker:
	docker build -t ghcr.io/technocultureresearch/saliva-qa-api:latest .
	docker run -p 8000:8000 ghcr.io/technocultureresearch/saliva-qa-api

push:
	docker push ghcr.io/technocultureresearch/saliva-qa-api:latest

test: type
	pipenv run pytest

format:
	pipenv run black .

lint:
	pipenv run ruff ./ --watch

type:
	pipenv run mypy .

install:
	pipenv install
	pipenv install --dev
	pipenv run pre-commit install
	pipenv run pre-commit autoupdate

pre-commit:
	pipenv run pre-commit run --all-files

shell:
	pipenv shell

clean:
	rm -rf .venv

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "dev  		Run the application in development mode"
	@echo "test 		Run the test suite"
	@echo "format 		Format the code"
	@echo "lint 		Run the linter"
	@echo "install  	Install the application"
	@echo "pre-commit 	Run pre-commit hooks"
	@echo "shell 		Run a shell in the virtual environment"
	@echo "clean 		Remove virtual environment"

.PHONY: dev test install shell help
