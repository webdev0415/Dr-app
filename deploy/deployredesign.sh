#!/bin/sh
cd /home/deploy
tar xf DoctorApp2.tar.xz
#sudo chown -R tomcat:tomcat MICA
rm -rf /usr/share/nginx/html/DoctorApp2
mv DoctorApp2 /usr/share/nginx/html/DoctorApp2
rm DoctorApp2.tar.xz

