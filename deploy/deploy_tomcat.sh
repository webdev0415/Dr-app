#!/bin/sh
cd /home/deploy
tar xf DoctorApp.tar.xz
#sudo chown -R tomcat:tomcat MICA
rm -rf /usr/share/nginx/html/DoctorApp
mv DoctorApp /usr/share/nginx/html/
rm DoctorApp.tar.xz

