# doc-editor

view/edit/save word,excel,ppt files online

## backgrounds

this project is based on onlyoffice V7.1.1.23

base images is:

onlyoffice/documentserver:7.1.1.23

version dependency:

| onlyoffice component | version  | repo                                                  |
| -------------------- | -------- | ----------------------------------------------------- |
| server               | 7.1.1.23 | https://github.com/ONLYOFFICE/server/tree/v7.1.1.76   |
| web-app              | 7.1.1.23 | https://github.com/ONLYOFFICE/web-apps/tree/v7.1.1.76 |
| build_tools          | 7.1.1.23 | https://github.com/ONLYOFFICE/sdkjs/tree/v7.1.1.76    |

what's more, it removes the concurrency limit, enable mobile editing and adds chinese fonts

this project is heavily inspired by the works of

[GitHub - aleho/onlyoffice-ce-docker-license: Onlyoffice with mobile editing enabled](https://github.com/aleho/onlyoffice-ce-docker-license)

and

[Docker Hub](https://hub.docker.com/r/gmsjy/onlyoffice)

btw:

```
docker pull gmsjy/onlyoffice
```

this image is really awesome but it used an early version of onlyoffice which is 6.2.0. The perpose of this project is to change the version to 7.1.1.

## Usage

```
docker build -t [imageName] .
```