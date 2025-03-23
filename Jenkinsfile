pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.51.1-noble' } }
    stages {
      steps {
        sh '''
            npm i -D @playwright/test
            npx playwright install
            '''
        }
    }    
    stage('test') {
        steps {
            sh '''
            npx playwright test --grep='@Smoke'
            '''
        }
    }   
}