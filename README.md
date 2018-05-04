# Windows-Personal-Assistant-Server
For the INFOTC-4400 Final Project, allows CRUD of Notes, Tasks, and Events


***
# API End-Points
* [Event](#event---top)
* [Note](#note---top)
* [Task](#task---top)

# Event - [Top](#api-end-points)
## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/event/create -> POST
### This function creates an event inside of MongoDB
#### Things to send:
* session_token -> string
* event -> string eg. {"title": "first event", "date": "05/14/18"}
#### Returns:
* success: 200
* failure: 401

## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/event/get -> POST
### This function returns all the events inside of mongodb
#### Things to send:
* session_token -> string
#### Returns:
* success: [{ "\_id": "5aeca2a29be70f28fdee4720", "title": "first event", "date": "05/14/18" }]
* failure: 401

## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/event/edit -> POST
### This function edits a specific event in mongodb
#### Things to send:
* session_token -> string
* id -> string
* newValue -> string eg. {"title": "first event", "date": "05/14/18"}
#### Returns:
* success: 200
* failure: 401

## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/event/delete -> POST
### This function deletes a specific event in mongodb
#### Things to send:
* session_token -> string
* id -> string
#### Returns:
* success: 200
* failure: 401

# Note - [Top](#api-end-points)
## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/note/create -> POST
### This function creates a note inside of MongoDB
#### Things to send:
* session_token -> string
* note -> string eg. {"title": "first note", "body": "this is the body of the first note"}
#### Returns:
* success: 200
* failure: 401

## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/note/get -> POST
### This function returns all the notes inside mongoDB
#### Things to send:
* session_token -> string
#### Returns:
* success: [{ "\_id": "5aeca27a9be70f28fdee471f", "title": "fourth note", "body": "this is the body of the fourth note" }]
* failure: 401

## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/note/edit -> POST
### This function edits a specific note in mongoDB
#### Things to send:
* session_token -> string
* id -> string
* newValue -> string eg. {"title": "first note", "body": "this is the body of the first note"}
#### Returns:
* success: 200
* failure: 401

## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/note/delete -> POST
### This function deletes a specific note in mongoDB
#### Things to send:
* session_token -> string
* id -> string
#### Returns:
* success: 200
* failure: 401

# Task - [Top](#api-end-points)
## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/task/create -> POST
### This function creates a task inside of MongoDB
#### Things to send:
* session_token -> string
* task -> string eg. {"title": "first task", "due_date": "05/14/18", "description": "insert this task into mongodb"}
#### Returns:
* success: 200
* failure: 401

## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/task/get -> POST
### This function returns all the tasks in MongoDB
#### Things to send:
* session_token -> string
#### Returns:
* success: [{ "\_id": "5aeca2be9be70f28fdee4721", "title": "first task", "due_date": "05/14/18", "description": "insert this task into mongodb" }]
* failure: 401

## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/task/edit -> POST
### This function edits a specific task in mongoDB
#### Things to send:
* session_token -> string
* id -> string
* newValue -> string eg. {"title": "first task", "due_date": "05/14/18", "description": "insert this task into mongodb"}
#### Returns:
* success: 200
* failure: 401

## http://ec2-34-218-76-81.us-west-2.compute.amazonaws.com:55554/task/delete -> POST
### This function deletes a specific task in mongoDB
#### Things to send:
* session_token -> string
* id -> string
#### Returns:
* success: 200
* failure: 401
