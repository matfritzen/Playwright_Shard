pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.51.1-noble' } }
    stages {
      steps {
            sh 'npm ci'
        }
    }    
    stage('test') {
        steps {
            sh ' npx playwright test --grep='@Smoke' '
        }
    }   
}