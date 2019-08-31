pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
         stage ('React.js Build')
         {
             steps {
                cp -r  '~/home/vengat/My\ Projects/React Projects/login-app/.' '/var/lib/jenkins/workspace/Login_Module_Pipeline'
             }
             steps {
                 sh 'npm run build'
                 echo 'UI React.js Project Build Successfully!!!'
             }
         }
    }
}