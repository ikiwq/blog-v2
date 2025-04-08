# The ikiwq blog
### Overview
This is the second iteration of my Blog. The [first iteration](https://github.com/ikiwq/blog-v1) can be found here. This project is built using NextJS to provide SSR rendering and an eccelent CEO. The project relies on the blog-api that can be found [here](https://github.com/ikiwq/blog-api-v1).
#### Built with
[![My Skills](https://skillicons.dev/icons?i=nextjs,react,tailwind&theme=light)](https://skillicons.dev)
#### Screenshots

##### Dark Mode
<p float="left">
   <img src="https://github.com/ikiwq/blog/assets/110495658/4c467ab4-07f1-4fa5-b4bc-dba9ef4eb368" height="300" width="400">
   <img src="https://github.com/ikiwq/blog/assets/110495658/12aa4eba-5312-430a-8229-d717830b4987" height="300" width="400">
   <img src="https://github.com/ikiwq/blog/assets/110495658/52a80c65-aa50-49f7-b551-b9b7229e7d58" height="300" width="400">
   <img src="https://github.com/ikiwq/blog/assets/110495658/1419bdbf-11de-495f-9563-0ff0917403be" height="300" width="400">
</p>

##### Light mode
<p>
  <img src="https://github.com/ikiwq/blog/assets/110495658/3bd18f9c-fb13-42d2-941c-8da1bff1c9cd" height="300" width="400">
  <img src="https://github.com/ikiwq/blog/assets/110495658/bbe274af-7b8e-4865-b2fc-9ab2b1ad0bc0" height="300" width="400">
</p>

### Requisites
- Node v. 16.x or higher (or any other package manager that supports all the dependencies listed in the package.json).

### Installation
First, clone the repository:
```
  git clone https://github.com/ikiwq/blog.git
```
Navigate to the cloned repository's directory and run:
```
  npm i
```
to install all the libraries. Remember to use the package manager of your choice.

Finally, in your .env file, you should add an API URL where the blog will retrieve data from.
```
PUBLIC_API_URL = "localhost:8080/api/v1"
```
#### Test server
To start the development server, run
```
  npm run dev
```
#### Building
To build the project, run:
```
  npm run build
```
Then, you can start the production server by running
```
  npm run start
```

### Licensing
This project is licensed under the MIT license.
