import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import"./Blog.css"
const Blog = () => {
    return (
        <div>
           <h1>this blog page</h1>
           <div className='blog-page'>
           <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. what is cors?</Accordion.Header>
        <Accordion.Body>
        CORS stands for Cross-Origin Resource Sharing . <br></br>It allows us to relax the security applied to an API.<br></br> This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.<br></br> It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>3. How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
         If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>4. What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        Node. js is an open-source backend javascript runtime environment.<br></br>
        It is a used as backend service where javascript works on the server-side of the application.<br></br>
         This way javascript is used on both frontend and backend.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
           </div>
        </div>
    );
};

export default Blog;