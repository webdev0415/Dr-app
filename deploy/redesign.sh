#!/bin/sh
scp deploy/DoctorApp2.tar.xz deploy@34.236.230.215:
#scp -i ~/.ssh/deploy.pem  -r dist/WebKiosk deploy@34.236.230.215:
ssh   deploy@34.236.230.215 'bash -s' < ./deploy/deployredesign.sh
rm deploy/DoctorApp2.tar.xz

