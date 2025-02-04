pipeline {
  agent any
  stages {
    stage('CheckData') {
      parallel {
        stage('CheckData') {
          steps {
            sh 'ls -ltra'
          }
        }

        stage('InstallDeps') {
          steps {
            sh 'npm install'
          }
        }

      }
    }

  }
}