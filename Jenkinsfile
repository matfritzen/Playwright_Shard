pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.51.1-noble' } }
    stages {
        stage('test') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }   

        stage('test') {
            steps {
                sh 'npx playwright test --grep=@Smoke'
            }
        }   
    } 
}