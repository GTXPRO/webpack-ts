pipeline {
  agent any
  stages {
    stage('Pre-cleanup') {
      steps {
        sh 'rm -rf ./node_modules'
        sh 'df -h'
        sh 'pwd'
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build:prod'
      }
    }
    stage('Deploy') {
      when {
        expression {
          currentBuild.result == null || currentBuild.result == 'SUCCESS' 
        }
      }
      steps {
          sh 'uptime'
          sh 'cat ./dist/manifest.json'
          echo currentBuild.result
      }
    }
  }
  post {
    failure {
      echo 'Processing failed'
    }
    success {
      echo 'Processing succeeded'
    }
  }
}