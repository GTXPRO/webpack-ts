pipeline {
  agent any
  stages {
    stage('Pre-cleanup') {
      steps {
        sh 'rm -rf ./node_modules'
        sh 'df -h'
        sh 'pwd'
        sh 'ls -lsa'
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