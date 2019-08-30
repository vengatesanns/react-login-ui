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
                 sh 'npm run build'
                 echo 'UI React.js Project Build Successfully!!!'
             }
         }
    }
}