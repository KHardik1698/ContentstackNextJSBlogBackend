# React NextJS Contentstack Blog Rendering Frontend

This Repository contains a Project which has the React NextJS Frontend for Blog Rendering.\
This Project is created using a Modular approach, where various functionalities are divided into various Pages.

> # Backend/Data-Source:

The Backend/Data-Source for Company Data is stored at Contentstack CMS.

> # Navigation:

**http://localhost:3000/** will be the Home Page of the Project.\
**http://localhost:3000/blogs** will be the Page for All Blogs.\
**http://localhost:3000/blog/id** will be the Page for Single Blog.

> # Folder Structure:

Each Pages Module has it's own Folder by the name of the Component.\
The Folder contains the main index.js or id.js file & index.module.css style file.

> # Components:

The Components Folder contains all the Common Components.\
The Header Component contains Team Logo, Team Name & Navigation Links.\
The Footer Component contains Footer Title, Copyright Text & Social Media Icons.

> # Fetch Data Component:

This Fetch Data Folder contains a File which has the Contentstack Fetch Data Function from where the data will be fetched.

> # Pages:

The Pages Folder contains all the Pages Components to be served for any given URL Route.\
There is a default index.js which is used to render the "/" Home Page.\
It contains Header Component, Home Component & Footer Component.\
There is a blogs page which has all the Blogs Cards.\
It contains Header Component, Blogs Component & Footer Component.\
There is a blog page which has a Single Blog.\
It contains Header Component, Single Blog Component & Footer Component.

> # Styles:

Index Page has it's style file stored in Styles Folder.\
Each Page Module contains it's own Module CSS File for Styling.

> # Demo:

The Project is Hosted on Vercel.\
This will be the Home Page for Company Website.\
**https://contentstack-next-js-blog-backend.vercel.app/**
