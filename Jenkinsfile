pipeline {
    agent any
    
    stages {

        stage('Git checkout'){
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'music_award', url: 'https://github.com/lilkevinrobert/bongo-music-awards.git']])
            }
        }
        stage('Backend') {
            steps {
                sh 'composer update'
                sh 'composer install'
            }
        }
        stage('Test') {
            steps {
                echo 'node --version'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
