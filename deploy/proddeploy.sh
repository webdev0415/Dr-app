#!/bin/sh
scp  deploy/DoctorApp.tar.xz deploy@13.56.40.133:
#scp   -r dist/WebKiosk deploy@34.236.230.215:
ssh  deploy@13.56.40.133 'bash -s' < ./deploy/deploy_tomcat.sh
rm deploy/DoctorApp.tar.xz

