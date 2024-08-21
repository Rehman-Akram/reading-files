# Project
This is simple express project created to read files in parallel way. It can handle multiple files, and read these files. 

# Description
I wanted to read 100 of files simultaneously, without blocking any code. So i have created this project. In this project i have used following.

1. bull queues 
2. redis
3. bull workers
4. pm2 

User can upload one file, multiple files and hit same api many times. Upon receival of files, it will send response that files are being read. 

After sending response, it will add files in bull queue and its processer (bull worker) will read file (line by line) and then process it line by line. It will consider first row as columns and remaining rows as records. may records as per column name (keys) and console that file which is read. 

One can change the implementation, what to do while reading file. 

Further mongo db is setup, in case if any one required to add data/ update data at run time to local no-sql db. It can create new collection and add data. No schema is finalized to make it generic.

# Api 
{baseurl}/files/read-files

example:
http://localhost:3000/files/read-files

further add one or multiple files from postman or as form data.


# Pre-requisties

1. Node v20.16.0
2. mongoDb 
3. redis-server v7.4.0
4. pm2

# Setup

1. Install above mentioned pre-requisites
2. clone that repo
3. create .env file as per sample.env
3. npm install
4. npm run start 