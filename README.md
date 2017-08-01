# Node Development Workflow with Docker Multi-stage Build

This is a basic setup of using multi-stage docker builds with the goal of
encapsulating the development and production docker images within the same
Dockerfile, with the same goal as the [Build Container][build-container]
pattern:

*Create additional Docker images with required tools (compilers, linters, 
testing tools) and use these images to produce a lean, secure and production 
ready Docker image."*

This repo is inspired and influenced by this [tutorial][tutorial] 
by Alexei Ledenev.

## BUILD
docker build -t johndoty/node-builder .

## RUN
docker run -i -t -p 8080:8080 johndoty/node-builder

[build-container]: https://medium.com/@alexeiled/docker-pattern-the-build-container-b0d0e86ad601
[tutorial]: https://codefresh.io/blog/node_docker_multistage/

