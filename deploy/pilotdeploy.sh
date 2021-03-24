#!/bin/sh
scp  deploy/DoctorApp.tar.xz deploy@54.67.71.69:
#scp -i ~/.ssh/deploy.pem  -r dist/WebKiosk deploy@34.236.230.215:
ssh  deploy@54.67.71.69 'bash -s' < ./deploy/deploy_tomcat.sh
#rm deploy/DoctorApp.tar.xz

