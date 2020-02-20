#!/bin/sh

docker build -t localhost:5000/Clearing-House-UI-Kit git@github.com:matt.dias/Clearing-House-UI-Kit

docker push localhost:5000/Clearing-House-UI-Kit
