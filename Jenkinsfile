pipeline {
    agent any
    stages {
         stage ('NPM Dependency Install')
         {
             steps
             {
                sh 'npm install'
                echo '>>> NPM Install Successfully'   
             }
         }
         stage ('Unit Test')
         {
             steps
             {
                echo '>>> Unit Test Skiped Successfully'   
             }
         }
         stage ('Build')
         {
             steps
             {
                sh 'npm run build'
                echo '>>> Build Successfully'   
             }
         }
         stage ('Deploy')
         {
            steps
            {
                sh 'ls -a'
                sh 'cp -r /var/lib/jenkins/workspace/Login_Module_Pipeline/. /var/www/hackpro.jumpingcrab.com/html/'
                echo '>>> React.js Project Build files Moved to Nginx Server'
                echo '>>> Login UI Deployed Successfully'   
            }   
         }
    }
}