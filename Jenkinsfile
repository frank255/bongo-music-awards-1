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
               dir('backend/') {
                         sh 'composer --version'
                         sh 'composer update'
                         sh 'composer install'
                         /* sh 'npm install'
                         sh 'php artisan migrate'
                         sh 'php artisan create:superuser'
                         sh 'php artisan key:generate'
                         sh 'php artisan jwt:secret --force' */
                   }
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
