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
                echo '>>> Unit Test Run Successfully'   
             }
         }
         stage ('Build')
         {
             steps
             {
                echo '>>> Build Successfully'   
             }
         }
         stage ('Deploy')
         {
            steps
            {
                echo '>>> Login UI Deployed Successfully'   
            }   
         }
    }
}