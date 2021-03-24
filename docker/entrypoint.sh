#!/bin/bash

echo "Decompressing files..."
tar xvf ./deploy/DoctorApp.tar.xz
cp -auvx DoctorApp/* /usr/share/nginx/html/DoctorApp/
cp -auvx DoctorApp /usr/share/nginx/html/DoctorApp/

exec "$@"
