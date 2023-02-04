# Saliva QA API

## Build
```sh
# Install Python dependencies
> make install
# Run the API
> make dev
```

### Using Docker
```sh
# Build the image
> docker build -t tcr/saliva-qa-api .
# Run the container
> docker run -p 8000:8000 tcr/saliva-qa-api
```

### Other Targets
> `make help` - Show this help message with all targets
