pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'music_award', url: 'https://github.com/lilkevinrobert/bongo-music-awards.git']])
                //echo 'Building stage'
            }
        }
        stage('Test') {
            steps {
                //
            }
        }
        stage('Deploy') {
            steps {
                //
            }
        }
    }
}