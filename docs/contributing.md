# Contributing

## Documentation 

All of the documentation is stored in the `docs/` folder of this repository and is all written in markdown. The documentation is generated with [Material MkDocs](https://squidfunk.github.io/mkdocs-material/), so if you want to see what the changes look like locally it is recommended to use [Docker](https://www.docker.com) with the [Material MkDocs docker image](https://squidfunk.github.io/mkdocs-material/getting-started/#with-docker). 

```bash
# download the image
docker pull squidfunk/mkdocs-material

# run the server locally 
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

Then add the new documentation markdown file into the appropriate folder inside `docs/` and add it to the `mkdocs.yml` file in the project so that it can be navigated to. Put up a pull request for review. 