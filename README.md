# apiconsole
---

## Project Description

---


| Dir | Explaination |
| --- | --- |
| src | Contain all of source files |
| src/app/index | app entrance |
| src/app/modules | page modules |
| src/app/components | components folder. |
| dist | build files are here. |
| abc.json | ehdev's configeration file. |


## HOW TO START
---

1. Install the project's dependence when you checkout the project first time.

```sh
npm install
```

2. Use `ehdev` to start your development environment.

```sh
ehdev server
```

3. When you're ready to deploy the project to the online server, you should build the project.

```sh
ehdev build
## then
svn commit
## or 
git push
```
